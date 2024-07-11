import { isValidPath, isValidUrl, validateInput } from "./input.validations";

describe("Validations Spec", () => {
  it("isValidUrl", () => {
    expect(isValidUrl("http://localhost:8000/api")).toBe(true);
    expect(isValidUrl("example/test")).toBe(false);
  });
  it("isValidPath", () => {
    expect(isValidPath("./")).toBe(true);
    expect(isValidPath("not-path")).toBe(false);
  });

  it("validateInput", () => {
    expect(validateInput("./")).toBe(undefined);
    expect(validateInput("http://localhost:8000/api")).toBe(undefined);
    expect(validateInput("  ")).toBe("Input cant be empty");
    expect(validateInput("")).toBe("Input cant be empty");
    expect(validateInput("not-path")).toBe("Input is not valid url or path");
  });
});
