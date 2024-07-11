import { Strategy } from "./constants/reading-strategy.enum";
import { ReadHttpCallStrategy } from "./read-http-call.strategy";
import { ReadLocalFileStrategy } from "./read-local-file.strategy";

export class ReadingStrategy {
  private select(strategy: keyof typeof Strategy) {
    switch (strategy) {
      case Strategy.HTTP:
        return new ReadHttpCallStrategy();
      case Strategy.FILE:
        return new ReadLocalFileStrategy();
      default:
        throw new Error(`Unknow Strategy ${strategy}`);
    }
  }
  async read(path: string) {
    if (path.startsWith("http://") || path.startsWith("https://")) {
      return this.select(Strategy.HTTP).read(path);
    } else {
      return this.select(Strategy.FILE).read(path);
    }
  }
}
