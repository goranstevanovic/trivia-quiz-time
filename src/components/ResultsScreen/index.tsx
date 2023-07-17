import Button from '../Button';
import styles from './ResultsScreen.module.css';

export default function ResultsScreen() {
  return (
    <div className={styles.resultsScreen}>
      <div className={styles.resultsWrapper}>
        <h1 className={styles.resultsHeading}>Results</h1>
        <div>
          <h2 className={styles.resultsTitle}>Total correct answers:</h2>
          <p className={styles.resultsStats}>40/50 &ndash; 80%</p>
        </div>
        <div>
          <h2 className={styles.resultsTitle}>Total points:</h2>
          <p className={styles.resultsStats}>1,000/1,500 &ndash; 67%</p>
        </div>
      </div>

      <Button>Play Again</Button>
    </div>
  );
}
