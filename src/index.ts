import { text } from "@clack/prompts";
import { ReadingStrategy } from "./strategies/reading-strategy";
import { analyzeText } from "./domain/text";
import { validateInput } from "./validations/input.validations";

const run = async () => {
  const path = await text({
    message: "Please insert path or url",
    placeholder: "https://google.com",
    validate(value) {
      return validateInput(value);
    },
  });
  const reader = new ReadingStrategy();
  const data = await reader.read(path.toString());
  const { repeatedWords, ...rest } = analyzeText(data);
  for (const [word, count] of repeatedWords ?? [[]]) {
    console.log({ word, count });
  }
  console.table(rest);
};

run().catch(console.error);
