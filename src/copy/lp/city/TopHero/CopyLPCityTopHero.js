import lpTopHeroCopy from './copyLPCityTopHero.json';

const CopyLPCityTopHero = ({ isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, isNearBy, location }) => {
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

  if (isNearBy) {
    return copy.replace('in ~LOCATION~', `near ${location}`);
  }

  // default
  return copy.replace('~LOCATION~', location);
};

export default CopyLPCityTopHero;
