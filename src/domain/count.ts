const countRegExp = (text: string, regex: RegExp) =>
  text.match(regex)?.length ?? 0;

const EVERY_LETTERS = /[\p{L}]/gu;
export const lettersCount = (text: string) => countRegExp(text, EVERY_LETTERS);

const SPACES = /\s/g;
export const spacesCount = (text: string) => countRegExp(text, SPACES);
