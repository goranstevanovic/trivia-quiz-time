import Button from '../Button';
import SettingsForm from '../SettingsForm';
import styles from './SettingsScreen.module.css';

export default function SettingsScreen() {
  return (
    <div className={styles.settingsScreen}>
      <SettingsForm />
      <Button
        onClick={function () {
          return;
        }}
      >
        Start Quiz
      </Button>
    </div>
  );
}
