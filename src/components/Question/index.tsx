import { QuestionType, useQuiz } from '../../contexts/QuizContext';
import styles from './Question.module.css';

import { shuffleArray } from '../utils/arrayUtils';

export default function Question() {
  const { questions, currentQuestionIndex } = useQuiz();
  const currentQuestion = questions.at(currentQuestionIndex) as QuestionType;

  const answers = [
    currentQuestion?.correct_answer,
    ...currentQuestion.incorrect_answers,
  ];

  const shuffledAnswers = shuffleArray(answers);

  return (
    <div className={styles.questionWrapper}>
      <header className={styles.questionMeta}>
        <p>{currentQuestion?.category}</p>
        <p>{currentQuestion?.difficulty}</p>
      </header>
      <p className={styles.questionText}>{currentQuestion?.question}</p>
      <ul className={styles.answerOptions}>
        {shuffledAnswers.map((answer) => (
          <li className={styles.answerOption} key={answer}>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
