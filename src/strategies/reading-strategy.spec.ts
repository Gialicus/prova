import { ReadHttpCallStrategy } from "./read-http-call.strategy";
import { ReadLocalFileStrategy } from "./read-local-file.strategy";
import { ReadingStrategy } from "./reading-strategy";

describe("ReadingStrategy Spec", () => {
  it("Should select http strategy", () => {
    const istance = new ReadingStrategy();
    const fn = istance["select"];
    expect(fn("HTTP")).toMatchObject(new ReadHttpCallStrategy());
  });
  it("Should select file strategy", () => {
    const istance = new ReadingStrategy();
    const fn = istance["select"];
    expect(fn("FILE")).toMatchObject(new ReadLocalFileStrategy());
  });
});
