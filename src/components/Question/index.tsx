import { QuestionType, useQuiz } from '../../contexts/QuizContext';
import styles from './Question.module.css';

import { shuffleArray } from '../utils/arrayUtils';
import { useMemo } from 'react';
import { decode } from 'html-entities';

export default function Question() {
  const { questions, currentQuestionIndex, selectedAnswer, dispatch } =
    useQuiz();
  const currentQuestion = questions.at(currentQuestionIndex) as QuestionType;
  const currentQuestionDifficulty = currentQuestion?.difficulty;
  let currentQuestionPoints: 10 | 20 | 30 = 10;

  switch (currentQuestionDifficulty) {
    case 'easy':
      currentQuestionPoints = 10;
      break;
    case 'medium':
      currentQuestionPoints = 20;
      break;
    case 'hard':
      currentQuestionPoints = 30;
      break;
  }

  const answers = useMemo(() => {
    if (currentQuestion) {
      return [
        currentQuestion?.correct_answer,
        ...currentQuestion.incorrect_answers,
      ];
    }
  }, [currentQuestion]);

  const shuffledAnswers = useMemo(() => {
    if (answers && answers.length > 2) {
      return shuffleArray(answers);
    } else {
      return ['True', 'False'];
    }
  }, [answers]);

  const isAnswered = selectedAnswer !== '';

  return (
    <div className={styles.questionWrapper}>
      <header className={styles.questionMeta}>
        <p>{currentQuestion?.category}</p>
        <p>
          {currentQuestion?.difficulty} ({currentQuestionPoints} points)
        </p>
      </header>
      <p className={styles.questionText}>{decode(currentQuestion?.question)}</p>
      <ul className={styles.answerOptions}>
        {shuffledAnswers?.map((answer) => (
          <li key={answer}>
            <button
              className={`${styles.answerOption} ${
                isAnswered && answer === selectedAnswer
                  ? selectedAnswer === currentQuestion.correct_answer
                    ? styles.answerCorrect
                    : styles.answerIncorrect
                  : ''
              } ${
                isAnswered && answer !== selectedAnswer
                  ? answer === currentQuestion.correct_answer
                    ? styles.answerCorrect
                    : ''
                  : ''
              }`}
              disabled={isAnswered}
              onClick={() => {
                if (dispatch) {
                  dispatch({ type: 'newAnswer', payload: answer });
                }
              }}
            >
              {decode(answer)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
