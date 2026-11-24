import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "★☆☆☆☆ Bowl empty for four whole minutes, he stole my sunny spot, then typed on the laptop I was sleeping on. One star. Would not re-adopt.";

// Gate: the bounty requires a single line of 1–200 characters.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`Entry violates the 1–200 char single-line gate (${entry.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
