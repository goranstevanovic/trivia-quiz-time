import Button from '../Button';
import Question from '../Question';
import styles from './QuizScreen.module.css';

export default function QuizScreen() {
  return (
    <div className={styles.quizScreen}>
      <div className={styles.quizMeta}>
        <p className={styles.questionNumber}>
          Question <strong>25/50</strong>
        </p>
        <div className={styles.pointsWrapper}>
          <p>Points</p>
          <p className={styles.pointsAmount}>1,000</p>
        </div>
      </div>

      <Question />

      <Button
        size="small"
        onClick={function () {
          return;
        }}
      >
        Next Question
      </Button>
    </div>
  );
}
