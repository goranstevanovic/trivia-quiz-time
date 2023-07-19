import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';
import Question from '../Question';
import styles from './QuizScreen.module.css';

export default function QuizScreen() {
  const { questions, currentQuestionIndex, points, dispatch } = useQuiz();
  const currentQuestionNumber = currentQuestionIndex + 1;
  const totalNumberOfQuestions = questions.length;

  return (
    <div className={styles.quizScreen}>
      <div className={styles.quizMeta}>
        <p className={styles.questionNumber}>
          Question{' '}
          <strong>
            {currentQuestionNumber}/{totalNumberOfQuestions}
          </strong>
        </p>
        <div className={styles.pointsWrapper}>
          <p>Points</p>
          <p className={styles.pointsAmount}>{points}</p>
        </div>
      </div>

      <Question />

      <Button
        size="small"
        onClick={() => {
          if (dispatch) {
            dispatch({ type: 'nextQuestion' });
          }
        }}
      >
        Next Question
      </Button>
    </div>
  );
}
