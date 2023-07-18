import { Dispatch, createContext, useContext, useReducer } from 'react';

type QuizStatus = 'inactive' | 'settings';

type QuizActionType = 'settings';

type QuizDispatch = Dispatch<QuizAction>;

type QuizState = {
  status: QuizStatus;
  dispatch?: QuizDispatch;
};

type QuizAction = {
  type: QuizActionType;
};

const initialState: QuizState = {
  status: 'inactive',
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
  const [{ status }, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ status, dispatch }}>
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
