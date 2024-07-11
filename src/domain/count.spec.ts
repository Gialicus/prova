import { lettersCount, spacesCount } from "./count";

describe("Count Spec", () => {
  it("lettersCount", () => {
    expect(lettersCount("Helloéà 1234")).toBe(7);
  });
  it("spacesCount", () => {
    expect(spacesCount(" Helloéà 1234 ")).toBe(3);
  });
});
