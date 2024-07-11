const EVERY_WORDS = /\b\w+\b/g;
export const extractWords = (text: string) => text.match(EVERY_WORDS);

export const wordsCount = (words: RegExpMatchArray): Record<string, number> => {
  const wordCount = new Map<string, number>();
  words.forEach((word) => {
    if (wordCount.has(word.toLowerCase())) {
      wordCount.set(word.toLowerCase(), wordCount.get(word.toLowerCase())! + 1);
    } else {
      wordCount.set(word.toLowerCase(), 1);
    }
  });
  return Object.fromEntries(wordCount);
};

export const repeatedWords = (wordCount: Record<string, number>) => {
  return Object.entries(wordCount)
    .filter(([_, count]) => count > 10)
    .map(([word, count]) => [word, count]);
};
