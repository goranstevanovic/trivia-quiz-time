import { useQuiz } from '../../contexts/QuizContext';
import Button from '../Button';
import SettingsForm from '../SettingsForm';
import styles from './SettingsScreen.module.css';

export default function SettingsScreen() {
  const { dispatch } = useQuiz();

  return (
    <div className={styles.settingsScreen}>
      <SettingsForm />
      <Button
        onClick={() => {
          if (dispatch) {
            dispatch({ type: 'startQuiz' });
          }
        }}
      >
        Start Quiz
      </Button>
    </div>
  );
}
