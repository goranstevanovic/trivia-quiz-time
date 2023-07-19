import { Dispatch, createContext, useContext, useReducer } from 'react';

type QuizStatus =
  | 'inactive'
  | 'settings'
  | 'loading'
  | 'error'
  | 'active'
  | 'finished';
type QuizActionType = 'settings';
type QuizNumberOfQuestions = '10' | '20' | '30' | '40' | '50';
type QuizQuestionCategory =
  | 'any'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'
  | '32';
type QuizQuestionDifficulty = 'any' | 'easy' | 'medium' | 'hard';
type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
type Questions = Question[];

type QuizDispatch = Dispatch<QuizAction>;

type QuizState = {
  status: QuizStatus;
  name: string;
  numberOfQuestions: QuizNumberOfQuestions;
  category: QuizQuestionCategory;
  difficulty: QuizQuestionDifficulty;
  questions: Questions;
  currentQuestion: number;
  selectedAnswer: number | null;
  correctAnswers: number;
  points: number;
  dispatch?: QuizDispatch;
};

type QuizAction = {
  type: QuizActionType;
};

const initialState: QuizState = {
  status: 'inactive',
  name: '',
  numberOfQuestions: '10',
  category: 'any',
  difficulty: 'any',
  questions: [],
  currentQuestion: 0,
  selectedAnswer: null,
  correctAnswers: 0,
  points: 0,
};

const QuizContext = createContext<QuizState | null>(null);

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'settings':
      return {
        ...state,
        status: 'settings',
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
      currentQuestion,
      selectedAnswer,
      correctAnswers,
      points,
    },
    dispatch,
  ] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider
      value={{
        status,
        name,
        numberOfQuestions,
        category,
        difficulty,
        questions,
        currentQuestion,
        selectedAnswer,
        correctAnswers,
        points,
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
