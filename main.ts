import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Alien Field Notes: The Two Day Earth Review.
// One line of plain text: a review of planet Earth by an alien tourist.
// The drive-through speaker pole knows every order and is never wrong;
// the visitor finds that unnerving.
const ENTRY =
  "They order food without leaving their metal boxes, speaking to a voice in a pole. " +
  "The pole knows their order. The pole is never wrong. I am afraid of the pole.";

// Guard: the sealed gate requires /output/entry.txt to be UTF-8 text of
// 1 to 200 characters, not only white space, on exactly one line. Fail
// loudly here rather than shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1-200 characters`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (/[\u00A0\u200B\u200C\u200D\uFEFF]/.test(ENTRY)) {
  throw new Error("entry contains invisible whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);
