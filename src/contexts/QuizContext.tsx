import { createContext, useContext, useEffect, useReducer } from 'react';

import {
  QuizAPIResponse,
  QuestionType,
  QuestionsType,
  QuizState,
  QuizAction,
} from './QuizContext.types';

const BASE_URL = 'https://opentdb.com/api.php';

function calculateTotalPossiblePoints(array: QuestionsType) {
  return array.reduce(function (
    totalPoints: number,
    currentQuestion: QuestionType,
  ) {
    switch (currentQuestion.difficulty) {
      case 'easy':
        return totalPoints + 10;
      case 'medium':
        return totalPoints + 20;
      case 'hard':
        return totalPoints + 30;
      default:
        return totalPoints;
    }
  }, 0);
}

const initialState: QuizState = {
  status: 'inactive',
  name: '',
  numberOfQuestions: '10',
  category: 'any',
  difficulty: 'any',
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswer: '',
  correctAnswers: 0,
  points: 0,
  totalPossiblePoints: 100,
  error: '',
};

const QuizContext = createContext<QuizState | null>(null);

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  let currentQuestion;
  let currentCorrectAnswer;
  let currentPoints = 0;

  if (state.questions.length > 0) {
    currentQuestion = state.questions[state.currentQuestionIndex];
    currentCorrectAnswer = currentQuestion.correct_answer;
    currentPoints = 0;
    switch (currentQuestion.difficulty) {
      case 'easy':
        currentPoints = 10;
        break;
      case 'medium':
        currentPoints = 20;
        break;
      case 'hard':
        currentPoints = 30;
        break;
    }
  }

  switch (action.type) {
    case 'showSettings':
      return {
        ...state,
        status: 'showSettings',
      };
    case 'saveName':
      return {
        ...state,
        name: action.payload,
      };
    case 'saveNumberOfQuestions':
      return {
        ...state,
        numberOfQuestions: action.payload,
      };
    case 'saveCategory':
      return {
        ...state,
        category: action.payload,
      };
    case 'saveDifficulty':
      return {
        ...state,
        difficulty: action.payload,
      };
    case 'startQuiz':
      return {
        ...state,
        status: 'loading',
        questions: [],
        currentQuestionIndex: 0,
        selectedAnswer: '',
        correctAnswers: 0,
        points: 0,
      };
    case 'dataReceived':
      return {
        ...state,
        status: 'active',
        questions: action.payload,
        totalPossiblePoints: calculateTotalPossiblePoints(action.payload),
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'newAnswer':
      return {
        ...state,
        selectedAnswer: action.payload,
        points:
          action.payload === currentCorrectAnswer
            ? state.points + currentPoints
            : state.points,
        correctAnswers:
          action.payload === currentCorrectAnswer
            ? state.correctAnswers + 1
            : state.correctAnswers,
      };
    case 'nextQuestion': {
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswer: '',
      };
    }
    case 'finishQuiz': {
      return {
        ...state,
        status: 'finished',
      };
    }
    case 'playAgain':
      return {
        ...state,
        status: 'showSettings',
        questions: [],
        currentQuestionIndex: 0,
        selectedAnswer: '',
        correctAnswers: 0,
        points: 0,
        totalPossiblePoints: 100,
        error: '',
      };
    default:
      return state;
  }
}

function QuizProvider({ children }: { children: React.ReactNode }) {
  const [
    {
      status,
      name,
      numberOfQuestions,
      category,
      difficulty,
      questions,
      currentQuestionIndex,
      selectedAnswer,
      correctAnswers,
      points,
      totalPossiblePoints,
      error,
    },
    dispatch,
  ] = useReducer(quizReducer, initialState);

  useEffect(
    function () {
      if (status !== 'loading') return;

      async function getQuestions() {
        const categoryParam = category === 'any' ? '' : category;
        const difficultyParam = difficulty === 'any' ? '' : difficulty;

        const url = `${BASE_URL}?amount=${numberOfQuestions}&category=${categoryParam}&difficulty=${difficultyParam}`;

        try {
          const res = await fetch(url);
          const data = (await res.json()) as QuizAPIResponse;
          const { results } = data;
          dispatch({ type: 'dataReceived', payload: results });
        } catch (error) {
          dispatch({ type: 'dataFailed' });
        }
      }

      void getQuestions();
    },
    [status, numberOfQuestions, category, difficulty],
  );

  return (
    <QuizContext.Provider
      value={{
        status,
        name,
        numberOfQuestions,
        category,
        difficulty,
        questions,
        currentQuestionIndex,
        selectedAnswer,
        correctAnswers,
        points,
        totalPossiblePoints,
        error,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz(): QuizState {
  const context = useContext(QuizContext);
  if (context === undefined || context === null) {
    throw new Error('QuizContext must be used within QuizProvider');
  }
  return context;
}

export { QuizProvider, useQuiz };
