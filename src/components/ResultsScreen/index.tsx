import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';
import styles from './ResultsScreen.module.css';

export default function ResultsScreen() {
  const { questions, correctAnswers, points, totalPossiblePoints, dispatch } =
    useQuiz();
  const totalAnswers = questions.length;
  const correctAnswersPercent = Math.round(
    (correctAnswers / totalAnswers) * 100,
  );
  const pointsPercentage = Math.round((points / totalPossiblePoints) * 100);

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
          <p className={styles.resultsStats}>
            {points}/{totalPossiblePoints} &ndash; {pointsPercentage}%
          </p>
        </div>
      </div>

      <Button
        onClick={function () {
          if (dispatch) {
            dispatch({ type: 'playAgain' });
          }
        }}
      >
        Play Again
      </Button>
    </div>
  );
}
