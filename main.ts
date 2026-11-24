// Writes the haiku in entry.txt to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only; resolves entry.txt relative to this script,
// never relative to the working directory, so it runs from any cwd.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "entry.txt");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  console.error("error: MAKEFUN_OUTPUT_DIR is not set; nothing was written");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "entry.txt"));
console.log(`wrote ${join(outputDir, "entry.txt")}`);
