import React from 'react';
import Button from '../Button/Button';
import SquareIconButton from '../SquareIconButton/SquareIconButton';

const FallbackAddButton = ({ isCondensed = false, children = '', className = '', ...rest }) => {
  if (isCondensed) {
    return (
      <SquareIconButton className={className} {...rest}>
        +
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
      {'+ '}
      {children}
    </Button>
  );
};

export default FallbackAddButton;
