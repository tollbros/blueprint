import lpTopHeroCopy from '../../data/copyLPStateTopHero.json';

const getCopyLPStateTopHero = (props) => {
  const { isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, state, isDebug = false } = props;

  if (!state) {
    console.error('getCopyLPStateTopHero is missing state prop');
  }

  let copy = lpTopHeroCopy.default;

  if (isSingleFamily) {
    copy = lpTopHeroCopy.singleFamily;
  }

  if (isTownhome) {
    copy = lpTopHeroCopy.townhome;
  }

  if (isCondo) {
    copy = lpTopHeroCopy.condo;
  }

  if (isActiveAdult) {
    copy = lpTopHeroCopy.activeAdult;
  }

  if (isFuture) {
    copy = lpTopHeroCopy.future;
  }

  const finalCopy = copy.replace('~STATE~', state);

  if (isDebug) {
    console.table({ finalCopy, ...props });
  }

  return finalCopy;
};

export default getCopyLPStateTopHero;
