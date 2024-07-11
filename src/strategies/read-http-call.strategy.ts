import { fetch } from "undici";
import { IReadingStrategy } from "./interfaces/reading.streategy.interface";

export class ReadHttpCallStrategy implements IReadingStrategy {
  constructor() {}
  async read(path: string): Promise<string> {
    const response = await fetch(path.toString());
    return response.text();
  }
}
