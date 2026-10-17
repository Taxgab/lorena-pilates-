import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "..", "public", "imagenes");
const source = join(here, "logo-original.jpg");
const logoOut = join(publicDir, "logo.png");
const markOut = join(publicDir, "logo-mark.png");

// The source logo is a flat-color lockup (figures + wordmark) on a white background.
// 1) trim the uniform white border, 2) downscale, 3) turn near-white pixels transparent
// so the mark blends onto any page background instead of showing a white box.
const { data, info } = await sharp(source)
  .trim({ threshold: 12 })
  .resize({ width: 300 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const LOW = 200; // min RGB channel <= LOW  -> fully opaque
const HIGH = 250; // min RGB channel >= HIGH -> fully transparent

for (let i = 0; i < data.length; i += 4) {
  const minChannel = Math.min(data[i], data[i + 1], data[i + 2]);
  const alpha = Math.max(0, Math.min(1, (HIGH - minChannel) / (HIGH - LOW)));
  data[i + 3] = Math.round(alpha * 255);
}

const png = { compressionLevel: 9, effort: 10, palette: true, quality: 95 };
const base = sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });

// Full lockup (figures + wordmark): used where there is vertical room (footer).
const full = await base.clone().png(png).toFile(logoOut);

// Icon-only mark (figures, without the wordmark): used in compact spots like the header.
const markHeight = Math.round(info.height * 0.7);
const mark = await base
  .clone()
  .extract({ left: 0, top: 0, width: info.width, height: markHeight })
  .png(png)
  .toFile(markOut);

console.log(`logo.png      ${full.width}x${full.height}`);
console.log(`logo-mark.png ${mark.width}x${mark.height}`);
