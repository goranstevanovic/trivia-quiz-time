import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';
import styles from './ErrorScreen.module.css';

export default function ErrorScreen() {
  const { dispatch } = useQuiz();

  const message =
    'Something went wrong while trying to get questions and answers for your game of quiz. Please try again.';

  function handleTryAgainClick() {
    if (dispatch) {
      dispatch({ type: 'showSettings' });
    }
  }

  return (
    <div className={styles.errorWrapper}>
      <p className={styles.errorMessage}>{message}</p>

      <Button onClick={handleTryAgainClick}>Try Again</Button>
    </div>
  );
}
