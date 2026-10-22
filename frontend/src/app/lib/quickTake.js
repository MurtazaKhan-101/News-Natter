export const QUICK_TAKE_MAX_WORDS = 25;

// Whitespace-separated tokens; must match the backend validateComment rule.
export const countWords = (text) => {
  const trimmed = (text || "").trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
};

export const exceedsQuickTakeLimit = (text) =>
  countWords(text) > QUICK_TAKE_MAX_WORDS;
