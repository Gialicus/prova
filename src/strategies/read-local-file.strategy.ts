import { readFile } from "node:fs/promises";
import { IReadingStrategy } from "./interfaces/reading.streategy.interface";

export class ReadLocalFileStrategy implements IReadingStrategy {
  constructor() {}
  async read(path: string): Promise<string> {
    const file = await readFile(path);
    return file.toString();
  }
}
