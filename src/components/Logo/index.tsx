import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <p className={styles.supHeading}>It's</p>
      <h1 className={styles.heading}>
        Trivia
        <br />
        Quiz
        <br />
        Time
      </h1>
      <p className={styles.subHeading}>Test your knowledge</p>
    </div>
  );
}
