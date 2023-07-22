import styles from './Button.module.css';

type ButtonSize = 'big' | 'small';

type ButtonProps = {
  size?: ButtonSize;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  size = 'big',
  onClick,
  children,
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
}
