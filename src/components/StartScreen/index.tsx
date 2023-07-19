import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';
import Logo from '../Logo';
import styles from './StartScreen.module.css';

export default function StartScreen() {
  const { dispatch } = useQuiz();

  function handleClick() {
    if (dispatch) {
      dispatch({ type: 'showSettings' });
    }
  }

  return (
    <div className={styles.startScreen}>
      <Logo />
      <Button size="big" onClick={handleClick}>
        Let's Play
      </Button>
    </div>
  );
}
