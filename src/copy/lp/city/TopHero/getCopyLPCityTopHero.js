import lpTopHeroCopy from './copyLPCityTopHero.json';

const getCopyLPCityTopHero = ({
  isTownhome,
  isCondo,
  isActiveAdult,
  isSingleFamily,
  isFuture,
  isNearBy,
  city,
  stateAbbreviation,
}) => {
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

  copy = copy.replace('~ST~', stateAbbreviation);

  if (isNearBy) {
    return copy.replace('in ~CITY~', `near ${city}`);
  }

  // default
  return copy.replace('~CITY~', city);
};

export default getCopyLPCityTopHero;
