import { Dispatch } from 'react';

export type QuizAPIResponse = {
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

export type QuestionType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionsType = QuestionType[];

type QuizDispatch = Dispatch<QuizAction>;

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
  payload: QuestionsType;
};

type QuizActionDataFailed = {
  type: 'dataFailed';
};

type QuizActionNewAnswer = {
  type: 'newAnswer';
  payload: string;
};

type QuizActionNextQuestion = {
  type: 'nextQuestion';
};

type QuizActionFinishQuiz = {
  type: 'finishQuiz';
};

type QuizActionPlayAgain = {
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
