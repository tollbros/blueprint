import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Button from '../Button/Button';
import SquareIconButton from '../SquareIconButton/SquareIconButton';

const FallbackAddButton = ({ isCondensed = false, text = '', ...rest }) => {
  if (isCondensed) {
    return (
      <SquareIconButton {...rest}>
        <AddIcon fontSize={'small'} />
      </SquareIconButton>
    );
  }

  return (
    <Button
      size={'small'}
      color={'accent'}
      variant={'text'}
      className={`tb-MuiCssBaseline-typography-GothamBaseBold-font`}
      style={{ textWrap: 'nowrap' }}
      type={'button'}
      {...rest}
    >
      <AddIcon fontSize={'10px'} sx={{ marginRight: '4px' }} />
      {text}
    </Button>
  );
};

export default FallbackAddButton;
