import { createContext, useContext, useReducer } from 'react';

type QuizStatus = 'finished' | 'active';

type QuizContextType = {
  status: QuizStatus;
};

type QuizAction = { type: 'start' };

const initialState: QuizContextType = {
  status: 'finished',
};

const QuizContext = createContext<QuizContextType | null>(null);

function quizReducer(
  state: QuizContextType,
  action: QuizAction,
): QuizContextType {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        status: 'active',
      };
  }
}

function QuizProvider({ children }: { children: React.ReactNode }) {
  const [{ status }, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ status }}>{children}</QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('QuizContext must be used within QuizProvider');
  }
  return context;
}

export { QuizProvider, useQuiz };
