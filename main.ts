// One-sentence startup pitch: a trained actor hired to apologize in person.
// The premise sounds absurd (renting an apologizer), but the business holds:
// apologies are genuinely hard, in-person ones matter, and $40/hr is a real
// service price — the turn from laughing to nodding is the whole pitch.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line =
  "We rent out a trained actor to apologize to your boss, your ex, or your mother-in-law, in person, for $40 an hour.";

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
