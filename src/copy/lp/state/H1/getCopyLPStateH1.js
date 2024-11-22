import lpH1Copy from '../../data/copyLPStateH1.json';

const getCopyLPStateH1 = (props) => {
  const {
    isTownhome,
    isCondo,
    isActiveAdult,
    isSingleFamily,
    isFuture,
    isFuturePlural,
    state,
    isDebug = false,
  } = props;

  if (!state) {
    console.error('getCopyLPStateH1 is missing state prop');
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

  const finalCopy = copy.replace('~STATE~', state);

  if (isDebug) {
    console.table({ finalCopy, ...props });
  }

  return finalCopy;
};

export default getCopyLPStateH1;
