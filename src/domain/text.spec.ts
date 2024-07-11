import { lettersCount, spacesCount } from "./count";
import { analyzeText } from "./text";

describe("Text Spec", () => {
  it("analyzeText", () => {
    expect(analyzeText("A A bb bb c")).toMatchObject({
      repeatedWords: [
        ["a", 2],
        ["bb", 2],
      ],
      totalLetters: 7,
      totalSpaces: 4,
      totalWords: 5,
    });
  });
});
