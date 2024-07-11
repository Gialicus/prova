import { extractWords, repeatedWords, wordsCount } from "./words";

describe("Words Spec", () => {
  const text = "<div> ciaone a1a23!| 1a|1a";
  it("extractWords", () => {
    expect(extractWords(text)).toMatchObject([
      "div",
      "ciaone",
      "a1a23",
      "1a",
      "1a",
    ]);
  });
  it("wordsCount", () => {
    const words = extractWords(text);
    expect(wordsCount(words!)).toMatchObject({
      div: 1,
      ciaone: 1,
      a1a23: 1,
      "1a": 2,
    });
  });
  it("repeatedWords", () => {
    const words = extractWords(text);
    const count = wordsCount(words!);
    expect(repeatedWords(count)).toMatchObject([["1a", 2]]);
  });
});
