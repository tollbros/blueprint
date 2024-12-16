import AddIcon from '@mui/icons-material/Add';
import Button from '../Button/Button';
import SquareIconButton from '../SquareIconButton/SquareIconButton';

const FallbackAddButton = ({ isCondensed = false, children = '', className = '', ...rest }) => {
  if (isCondensed) {
    return (
      <SquareIconButton className={className} {...rest}>
        <AddIcon fontSize={'small'} />
      </SquareIconButton>
    );
  }

  return (
    <Button
      size={'small'}
      color={'accent'}
      variant={'text'}
      className={`tb-MuiCssBaseline-typography-GothamBaseBold-font ${className}`}
      style={{ textWrap: 'nowrap' }}
      type={'button'}
      {...rest}
    >
      <AddIcon fontSize={'10px'} sx={{ marginRight: '4px' }} />
      {children}
    </Button>
  );
};

export default FallbackAddButton;
