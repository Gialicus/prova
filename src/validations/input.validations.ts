import { existsSync } from "node:fs";
import { URL } from "node:url";

export const isValidUrl = (text: string) => {
  try {
    const _ = new URL(text);
    return true;
  } catch (_) {
    return false;
  }
};
export const isValidPath = (text: string) => {
  return existsSync(text);
};

export const validateInput = (input: string) => {
  const text = input.trim();
  if (!text || text.length === 0) {
    return "Input cant be empty";
  }
  if (isValidUrl(text)) {
    return;
  } else if (isValidPath(text)) {
    return;
  } else {
    return "Input is not valid url or path";
  }
};
