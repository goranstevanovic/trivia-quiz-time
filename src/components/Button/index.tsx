import styles from './Button.module.css';

type ButtonSize = 'big' | 'small';

type ButtonProps = {
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  size = 'big',
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
