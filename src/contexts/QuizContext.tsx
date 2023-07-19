import {
  Dispatch,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const BASE_URL = 'https://opentdb.com/api.php';

type QuizAPIResponse = {
  response_code: number;
  results: [];
};

type QuizStatus =
  | 'inactive'
  | 'showSettings'
  | 'loading'
  | 'error'
  | 'active'
  | 'finished';
export type QuizNumberOfQuestions = '10' | '20' | '30' | '40' | '50';
export type QuizQuestionCategory =
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
export type QuizQuestionDifficulty = 'any' | 'easy' | 'medium' | 'hard';
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
  error: string;
  dispatch?: QuizDispatch;
};

type QuizActionShowSettings = {
  type: 'showSettings';
};

type QuizActionSettingsSaveName = {
  type: 'saveName';
  payload: string;
};

type QuizActionSettingsSaveNumberOfQuestions = {
  type: 'saveNumberOfQuestions';
  payload: QuizNumberOfQuestions;
};

type QuizActionSettingsSaveCategory = {
  type: 'saveCategory';
  payload: QuizQuestionCategory;
};

type QuizActionSettingsSaveDifficulty = {
  type: 'saveDifficulty';
  payload: QuizQuestionDifficulty;
};

type QuizActionStartQuiz = {
  type: 'startQuiz';
};

type QuizActionDataReceived = {
  type: 'dataReceived';
  payload: Questions;
};

type QuizActionDataFailed = {
  type: 'dataFailed';
  payload: string;
};

type QuizAction =
  | QuizActionShowSettings
  | QuizActionSettingsSaveName
  | QuizActionSettingsSaveNumberOfQuestions
  | QuizActionSettingsSaveCategory
  | QuizActionSettingsSaveDifficulty
  | QuizActionStartQuiz
  | QuizActionDataReceived
  | QuizActionDataFailed;

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
  error: '',
};

const QuizContext = createContext<QuizState | null>(null);

function quizReducer(state: QuizState, action: QuizAction): QuizState {
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
        currentQuestion: 0,
        selectedAnswer: null,
        correctAnswers: 0,
        points: 0,
      };
    case 'dataReceived':
      return {
        ...state,
        status: 'active',
        questions: action.payload,
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
        error: action.payload,
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
          console.log(error);
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
        currentQuestion,
        selectedAnswer,
        correctAnswers,
        points,
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
