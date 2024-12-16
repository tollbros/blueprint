import lpH1Copy from '../../data/copyLPCityH1.json';

const getCopyLPCityH1 = (props) => {
  const { isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, isFuturePlural, city, isDebug } = props;

  let copy = lpH1Copy.default;

  if (isSingleFamily) {
    copy = lpH1Copy.singleFamily;
  }

  if (isTownhome) {
    copy = lpH1Copy.townhome;
  }

  if (isCondo) {
    copy = lpH1Copy.condo;
  }

  if (isActiveAdult) {
    copy = lpH1Copy.activeAdult;
  }

  if (isFuture) {
    copy = lpH1Copy.future;
  }

  if (isFuturePlural) {
    copy = lpH1Copy.futurePlural;
  }

  const finalCopy = copy.replace('~CITY~', city);

  if (isDebug) {
    console.table({ finalCopy, ...props });
  }

  return finalCopy;
};

export default getCopyLPCityH1;
