import lpParagraphCopy from '../../data/copyLPCountyParagraph.json';

const getCopyLPCountyParagraph = (props) => {
  const {
    isTownhome,
    isCondo,
    isActiveAdult,
    isSingleFamily,
    isFuture,
    isPlural,
    isNoHomeDesigns,
    isNoQMIs,
    county,
    communityName = 'Toll Brothers community',
    isDebug,
  } = props;
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

  const finalCopy = copy.replace('~COUNTY~', county);

  if (isDebug) {
    console.table({ finalCopy, ...props });
  }

  return finalCopy;
};

export default getCopyLPCountyParagraph;
