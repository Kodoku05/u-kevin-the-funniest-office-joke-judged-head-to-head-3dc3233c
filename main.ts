// 114 characters; the gate allows 1-200 Unicode code points.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The CEO kept clicking phishing links, so IT replaced his mouse with a stapler. Ticket closed: attachments secured.";

try {
  const length = [...LINE].length;
  if (length < 1 || length > 200 || !LINE.trim() || /[\r\n]/u.test(LINE)) {
    throw new Error("Entry must be one nonblank line of 1-200 Unicode code points.");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch (error) {
  console.error("Failed to write entry:", error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
