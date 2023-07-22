import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';
import Question from '../Question';
import styles from './QuizScreen.module.css';

export default function QuizScreen() {
  const { questions, currentQuestionIndex, selectedAnswer, points, dispatch } =
    useQuiz();
  const currentQuestionNumber = currentQuestionIndex + 1;
  const totalNumberOfQuestions = questions.length;

  const buttonText =
    currentQuestionIndex === questions.length - 1
      ? 'Finish Quiz'
      : ' Next Question';

  function nextButtonClickHandler() {
    if (dispatch) {
      dispatch({ type: 'nextQuestion' });
    }
  }

  function finishQuizClickHandler() {
    if (dispatch) {
      dispatch({ type: 'finishQuiz' });
    }
  }

  const buttonClickHandler =
    currentQuestionIndex === questions.length - 1
      ? finishQuizClickHandler
      : nextButtonClickHandler;

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
        disabled={selectedAnswer === ''}
        onClick={buttonClickHandler}
      >
        {buttonText}
      </Button>
    </div>
  );
}
