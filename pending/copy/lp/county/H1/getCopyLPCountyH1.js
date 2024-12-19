import lpH1Copy from '../../data/copyLPCountyH1.json';

const getCopyLPCountyH1 = (props) => {
  const { isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, isFuturePlural, county, isDebug } = props;

  if (!county) {
    console.error('getCopyLPCountyH1 is missing county prop');
  }

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

  const finalCopy = copy.replace('~COUNTY~', county);

  if (isDebug) {
    console.table({ finalCopy, ...props });
  }

  return finalCopy;
};

export default getCopyLPCountyH1;
