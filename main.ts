// Two Lines to Your Past Self — a make.fun entry.
// Writes exactly two lines to /output/entry.txt: a warning about one
// specific moment, and one sentence on why that moment mattered.
import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "Don't delete the voicemail your grandmother leaves on your twenty-first birthday, telling you she's proud of you — save it.",
  "That thirty-second message is the only recording of her voice you will ever own, and on the nights you want to quit, it is the reason you don't.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", lines.join("\n") + "\n", "utf8");
