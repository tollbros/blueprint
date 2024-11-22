import lpParagraphCopy from '../../data/copyLPCityParagraph.json';

const getCopyLPCityParagraph = ({
  isTownhome,
  isCondo,
  isActiveAdult,
  isSingleFamily,
  isFuture,
  isNearBy,
  isPlural,
  isNoHomeDesigns,
  isNoQMIs,
  city,
  communityName = 'Toll Brothers community',
}) => {
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

  if (isNearBy) {
    return copy.replace('in ~CITY~', `near ${city}`);
  }

  // default
  return copy.replace('~CITY~', city);
};

export default getCopyLPCityParagraph;
