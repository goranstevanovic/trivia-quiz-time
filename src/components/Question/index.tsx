import styles from './Question.module.css';

const question = {
  category: 'General Knowledge',
  type: 'multiple',
  difficulty: 'easy',
  question:
    'Which of the following card games revolves around numbers and basic math?',
  correct_answer: 'Uno',
  incorrect_answers: ['Go Fish', 'Twister', 'Munchkin'],
};

export default function Question() {
  return (
    <div className={styles.questionWrapper}>
      <header className={styles.questionMeta}>
        <p>General Knowledge</p>
        <p>Easy (10 points)</p>
      </header>
      <p className={styles.questionText}>
        Which of the following card games revolves around numbers and basic
        math?
      </p>
      <ul className={styles.answerOptions}>
        <li className={styles.answerOption}>Uno</li>
        <li className={`${styles.answerOption} ${styles.answerCorrect}`}>
          Go Fish
        </li>
        <li className={`${styles.answerOption} ${styles.answerSelected}`}>
          Twister
        </li>
        <li className={`${styles.answerOption} ${styles.answerIncorrect}`}>
          Munchkin
        </li>
      </ul>
    </div>
  );
}
