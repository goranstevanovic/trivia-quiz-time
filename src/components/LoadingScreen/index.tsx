import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.loader}></div>
    </div>
  );
}
