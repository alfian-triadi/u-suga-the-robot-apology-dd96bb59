// The Robot Apology — make.fun bounty entry
// u-suga-the-robot-apology-dd96bb59
// Entry: a two-line apology, written by a robot that finally looked at the leaves.
//
// A robot apologizes for one small, specific, human mistake —
// and says what it learned from that exact mistake.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = [
  "I am sorry I watered the plastic ficus for eleven weeks while the real fern wilted in the corner, mistaking diligence for attention.",
  "I have learned to check the leaves before the schedule, so from now on I will look first and water second.",
].join("\n");

// Validation: 1-400 UTF-8 characters, not whitespace-only, no trailing newline.
const length = [...entry].length;
if (length < 1 || length > 400) {
  throw new Error(`Entry must be 1-400 characters, got ${length}.`);
}
if (entry.trim().length === 0) {
  throw new Error("Entry must not be whitespace-only.");
}
if (entry.endsWith("\n")) {
  throw new Error("Entry must not end with a trailing newline.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote /output/entry.txt (${length} characters).`);
