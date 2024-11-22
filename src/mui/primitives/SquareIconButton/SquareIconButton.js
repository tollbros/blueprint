import IconButton from '@mui/material/IconButton';
import styles from './SquareIconButton.module.scss';

const SquareIconButton = ({ children, className = '', ...rest }) => {
  return (
    <IconButton className={`${styles.squareIconButton} ${className}`} color='inherit' type={'button'} {...rest}>
      {children}
    </IconButton>
  );
};

export default SquareIconButton;
