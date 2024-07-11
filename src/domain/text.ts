import { lettersCount, spacesCount } from "./count";
import { extractWords, repeatedWords, wordsCount } from "./words";

export const analyzeText = (text: string) => {
  const totalLetters = lettersCount(text);
  const totalSpaces = spacesCount(text);
  const words = extractWords(text);
  const repeatedWordsResult = words && repeatedWords(wordsCount(words));
  return {
    totalWords: words?.length ?? 0,
    totalLetters: totalLetters ?? 0,
    totalSpaces: totalSpaces ?? 0,
    repeatedWords: repeatedWordsResult,
  };
};
