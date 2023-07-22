import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';

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
    <div>
      <p>{message}</p>

      <Button onClick={handleTryAgainClick}>Try Again</Button>
    </div>
  );
}
