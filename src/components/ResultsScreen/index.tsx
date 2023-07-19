import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';
import styles from './ResultsScreen.module.css';

export default function ResultsScreen() {
  const { questions, correctAnswers, points } = useQuiz();
  const totalAnswers = questions.length;
  const correctAnswersPercent = (correctAnswers / totalAnswers) * 100;

  return (
    <div className={styles.resultsScreen}>
      <div className={styles.resultsWrapper}>
        <h1 className={styles.resultsHeading}>Results</h1>
        <div>
          <h2 className={styles.resultsTitle}>Total correct answers:</h2>
          <p className={styles.resultsStats}>
            {correctAnswers}/{totalAnswers} &ndash; {correctAnswersPercent}%
          </p>
        </div>
        <div>
          <h2 className={styles.resultsTitle}>Total points:</h2>
          <p className={styles.resultsStats}>{points}/1,500 &ndash; 67%</p>
        </div>
      </div>

      <Button
        onClick={function () {
          return;
        }}
      >
        Play Again
      </Button>
    </div>
  );
}
