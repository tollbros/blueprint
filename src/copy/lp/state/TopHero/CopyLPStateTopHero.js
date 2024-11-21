import lpTopHeroCopy from './copyLPStateTopHero.json';

const CopyLPStateTopHero = ({ isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, state }) => {
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

  // default
  return copy.replace('~STATE~', state);
};

export default CopyLPStateTopHero;
