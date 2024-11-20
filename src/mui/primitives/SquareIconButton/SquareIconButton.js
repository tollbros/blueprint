import IconButton from '@mui/material/IconButton';
import styles from './SquareIconButton.module.scss';

const SquareIconButton = ({ children, ...rest }) => {
  return (
    <IconButton className={styles.squareIconButton} color='inherit' type={'button'} {...rest}>
      {children}
    </IconButton>
  );
};

export default SquareIconButton;
