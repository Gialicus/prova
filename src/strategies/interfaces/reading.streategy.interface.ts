export interface IReadingStrategy {
  read(path: string): Promise<string>;
}
