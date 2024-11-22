import lpH1Copy from './copyLPCityH1.json';

const getCopyLPCityH1 = ({ isTownhome, isCondo, isActiveAdult, isSingleFamily, isFuture, isFuturePlural, city }) => {
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

  // default
  return copy.replace('~CITY~', city);
};

export default getCopyLPCityH1;
