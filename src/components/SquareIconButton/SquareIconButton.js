import styles from './SquareIconButton.module.scss';

const SquareIconButton = ({ children, className = '', ...rest }) => {
  return (
    <button className={`${styles.squareIconButton} ${className}`} color='inherit' type={'button'} {...rest}>
      {children}
    </button>
  );
};

export default SquareIconButton;
