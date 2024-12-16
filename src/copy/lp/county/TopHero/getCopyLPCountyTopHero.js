import lpTopHeroCopy from '../../data/copyLPCountyTopHero.json';

const getCopyLPCountyTopHero = (props) => {
  const { isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, county, state, isDebug } = props;

  if (!county) {
    console.error('getCopyLPCountyTopHero is missing county prop');
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

  if (!state) {
    copy = copy.replace(', ~STATE~', '');
  } else {
    copy = copy.replace('~STATE~', state);
  }

  const finalCopy = copy.replace('~COUNTY~', county);

  if (isDebug) {
    console.table({ finalCopy, ...props });
  }

  return finalCopy;
};

export default getCopyLPCountyTopHero;
