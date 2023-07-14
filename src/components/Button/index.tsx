import styles from './Button.module.css';

type ButtonSize = 'big' | 'small';

type ButtonProps = {
  size?: ButtonSize;
  children: React.ReactNode;
};

export default function Button({ size = 'big', children }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]}`}>{children}</button>
  );
}
