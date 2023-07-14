import Button from '../Button';
import Logo from '../Logo';
import styles from './StartScreen.module.css';

export default function StartScreen() {
  return (
    <div className={styles.startScreen}>
      <Logo />
      <Button size="big">Let's Play</Button>
    </div>
  );
}
