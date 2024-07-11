import { lettersCount, spacesCount } from "./count";
import { analyzeText } from "./text";

describe("Text Spec", () => {
  it("analyzeText", () => {
    expect(analyzeText("A A bb bb c")).toMatchObject({
      repeatedWords: [],
      totalLetters: 7,
      totalSpaces: 4,
      totalWords: 5,
    });
  });
});
