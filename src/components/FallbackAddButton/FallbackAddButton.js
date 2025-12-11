import PrimaryCTA from '../PrimaryCTA/PrimaryCTA';
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
    <PrimaryCTA
      size='small'
      priority='B'
      state='base'
      className={className}
      style={{ textWrap: 'nowrap' }}
      type='button'
      label={`+ ${children}`}
      {...rest}
    />
  );
};

export default FallbackAddButton;
