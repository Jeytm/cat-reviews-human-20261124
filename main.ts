import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "★☆☆☆☆ Bowl empty for four whole minutes, he stole my sunny spot, then typed on the laptop I was sleeping on. One star. Would not re-adopt.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
