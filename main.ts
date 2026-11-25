import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Relax — the map said shortcut. It just didn't mention the lake, the goat parade, or the wedding blocking the only bridge.";

// Gate assert: /output/entry.txt must be UTF-8, 1–200 chars, not only whitespace.
const len = [...ENTRY].length;
if (len < 1 || len > 200 || !ENTRY.trim()) {
  throw new Error(`gate failed: entry is ${len} chars`);
}
if (ENTRY.includes("\n")) {
  throw new Error("gate failed: entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars`);
