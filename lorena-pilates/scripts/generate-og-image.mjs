import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "og-image.svg");
const output = join(here, "..", "public", "og-image.png");

const info = await sharp(source, { density: 200 })
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Wrote ${output} (${info.width}x${info.height})`);
