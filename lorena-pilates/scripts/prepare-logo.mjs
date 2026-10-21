import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "..", "public", "imagenes");
const source = join(here, "logo-source.jpg");
const logoOut = join(publicDir, "logo.png");
const horizOut = join(publicDir, "logo-horizontal.png");

// The source logo is a monochrome lockup (figures + wordmark) on a white background.
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
const base = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toBuffer();

// Full vertical lockup (figures above wordmark): used in the footer.
await sharp(base).png(png).toFile(logoOut);

// Split point measured on the artwork: figures end ~67% of the trimmed height,
// right before the "Pilates" script.
const splitY = Math.round(info.height * 0.67);
const icon = await sharp(base)
  .extract({ left: 0, top: 0, width: info.width, height: splitY })
  .png()
  .toBuffer();
const wordmark = await sharp(base)
  .extract({ left: 0, top: splitY, width: info.width, height: info.height - splitY })
  .png()
  .toBuffer();

// Horizontal lockup (icon beside wordmark) for the header: the wordmark keeps the
// same width as the icon, matching the original lockup proportions.
const wordmarkScaled = await sharp(wordmark).resize({ width: info.width }).png().toBuffer();
const wordmarkMeta = await sharp(wordmarkScaled).metadata();
const gap = Math.round(info.width * 0.13);
const width = info.width + gap + wordmarkMeta.width;
const height = splitY;

const horizontal = await sharp({
  create: { width, height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([
    { input: icon, top: 0, left: 0 },
    { input: wordmarkScaled, top: Math.round((height - wordmarkMeta.height) / 2), left: info.width + gap },
  ])
  .png(png)
  .toFile(horizOut);

console.log(`logo.png            ${info.width}x${info.height}`);
console.log(`logo-horizontal.png ${horizontal.width}x${horizontal.height}`);
