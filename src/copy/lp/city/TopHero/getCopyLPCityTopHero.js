import lpTopHeroCopy from '../../data/copyLPCityTopHero.json';

const getCopyLPCityTopHero = (props) => {
  const { isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, isNearBy, city, stateAbbreviation, isDebug } =
    props;

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

  const finalCopy = copy.replace('~CITY~', city);

  if (isDebug) {
    console.table({ finalCopy, ...props });
  }

  return finalCopy;
};

export default getCopyLPCityTopHero;
