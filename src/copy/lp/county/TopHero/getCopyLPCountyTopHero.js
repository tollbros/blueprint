import lpTopHeroCopy from './copyLPCountyTopHero.json';

const getCopyLPCountyTopHero = ({ isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, county, state }) => {
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

  copy = copy.replace('~STATE~', state);

  // default
  return copy.replace('~LOCATION~', county);
};

export default getCopyLPCountyTopHero;
