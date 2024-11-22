import lpParagraphCopy from '../../data/copyLPStateParagraph.json';

const getCopyLPStateParagraph = (props) => {
  const {
    isTownhome, // optional
    isCondo, // optional
    isActiveAdult, // optional
    isSingleFamily, // optional
    isFuture, // optional
    isPlural, // optional
    isNoHomeDesigns, // optional
    isNoQMIs, // optional
    state, // required
    communityName = 'Toll Brothers community', // optional
    isDebug = false,
  } = props;

  if (!state) {
    console.error('getCopyLPStateParagraph is missing state prop');
  }

  const isOneCommunity = !isPlural;
  let copy = lpParagraphCopy.default;

  if (isNoQMIs) {
    copy = lpParagraphCopy.defaultNoQMIs;
  }

  if (isNoHomeDesigns) {
    copy = lpParagraphCopy.defaultNoHomeDesigns;
  }

  if (isPlural) {
    copy = lpParagraphCopy.defaultPlural;

    if (isNoQMIs) {
      copy = lpParagraphCopy.defaultNoQMIsPlural;
    }

    if (isNoHomeDesigns) {
      copy = lpParagraphCopy.defaultNoHomeDesignsPlural;
    }
  }

  if (isSingleFamily && isOneCommunity) {
    copy = lpParagraphCopy.singleFamily;
  }

  if (isSingleFamily && isPlural) {
    copy = lpParagraphCopy.singleFamilyPlural;
  }

  if (isTownhome && isOneCommunity) {
    copy = lpParagraphCopy.townhome;
  }

  if (isTownhome && isPlural) {
    copy = lpParagraphCopy.townhomePlural;
  }

  if (isCondo && isOneCommunity) {
    copy = lpParagraphCopy.condo;
  }

  if (isCondo && isPlural) {
    copy = lpParagraphCopy.condoPlural;
  }

  if (isActiveAdult && isOneCommunity) {
    copy = lpParagraphCopy.activeAdult;
  }

  if (isActiveAdult && isPlural) {
    copy = lpParagraphCopy.activeAdultPlural;
  }

  if (isFuture && isOneCommunity) {
    copy = lpParagraphCopy.future;
  }

  if (isFuture && isPlural) {
    copy = lpParagraphCopy.futurePlural;
  }

  copy = copy.replace('~COMMUNITYNAME~', communityName);

  const finalCopy = copy.replace('~STATE~', state);

  if (isDebug) {
    console.table({ finalCopy, ...props });
  }

  return finalCopy;
};

export default getCopyLPStateParagraph;
