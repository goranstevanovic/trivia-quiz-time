import { Dispatch } from 'react';

export type QuizAPIResponse = {
  response_code: number;
  results: [];
};

export type QuizStatus =
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

export type QuestionType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionsType = QuestionType[];

export type QuizDispatch = Dispatch<QuizAction>;

export type QuizState = {
  status: QuizStatus;
  name: string;
  numberOfQuestions: QuizNumberOfQuestions;
  category: QuizQuestionCategory;
  difficulty: QuizQuestionDifficulty;
  questions: QuestionsType;
  currentQuestionIndex: number;
  selectedAnswer: string;
  correctAnswers: number;
  points: number;
  totalPossiblePoints: number;
  error: string;
  dispatch?: QuizDispatch;
};

export type QuizActionShowSettings = {
  type: 'showSettings';
};

export type QuizActionSettingsSaveName = {
  type: 'saveName';
  payload: string;
};

export type QuizActionSettingsSaveNumberOfQuestions = {
  type: 'saveNumberOfQuestions';
  payload: QuizNumberOfQuestions;
};

export type QuizActionSettingsSaveCategory = {
  type: 'saveCategory';
  payload: QuizQuestionCategory;
};

export type QuizActionSettingsSaveDifficulty = {
  type: 'saveDifficulty';
  payload: QuizQuestionDifficulty;
};

export type QuizActionStartQuiz = {
  type: 'startQuiz';
};

export type QuizActionDataReceived = {
  type: 'dataReceived';
  payload: QuestionsType;
};

export type QuizActionDataFailed = {
  type: 'dataFailed';
};

export type QuizActionNewAnswer = {
  type: 'newAnswer';
  payload: string;
};

export type QuizActionNextQuestion = {
  type: 'nextQuestion';
};

export type QuizActionFinishQuiz = {
  type: 'finishQuiz';
};

export type QuizActionPlayAgain = {
  type: 'playAgain';
};

export type QuizAction =
  | QuizActionShowSettings
  | QuizActionSettingsSaveName
  | QuizActionSettingsSaveNumberOfQuestions
  | QuizActionSettingsSaveCategory
  | QuizActionSettingsSaveDifficulty
  | QuizActionStartQuiz
  | QuizActionDataReceived
  | QuizActionDataFailed
  | QuizActionNewAnswer
  | QuizActionNextQuestion
  | QuizActionFinishQuiz
  | QuizActionPlayAgain;
