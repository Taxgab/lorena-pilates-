import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const imageDir = join(root, "public", "imagenes");
const out = join(root, "public", "og-image.jpg");

const WIDTH = 1200;
const HEIGHT = 630;
const PANEL = 660; // left text-panel width; the photo fills the rest

const background = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#f5f1e9"/>
  <text x="64" y="404" font-family="Georgia, 'Times New Roman', serif" font-size="38" fill="#30372f">Clases grupales,</text>
  <text x="64" y="450" font-family="Georgia, 'Times New Roman', serif" font-size="38" fill="#30372f">presenciales y personalizadas</text>
  <text x="64" y="502" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#5b5f57">50 minutos · Burzaco, Buenos Aires</text>
  <rect x="64" y="524" width="90" height="6" fill="#c18b73"/>
</svg>`;

// Real photo cropped to fill the right side without cutting the face.
const photo = await sharp(join(imageDir, "lorena.jpg"))
  .resize(WIDTH - PANEL, HEIGHT, { fit: "cover", position: "top" })
  .toBuffer();

// Brand lockup, composited over the cream panel.
const logo = await sharp(join(imageDir, "logo-horizontal.png"))
  .resize({ width: 380 })
  .toBuffer();

const info = await sharp(Buffer.from(background))
  .composite([
    { input: photo, left: PANEL, top: 0 },
    { input: logo, left: 64, top: 150 },
  ])
  .jpeg({ quality: 86, chromaSubsampling: "4:4:4" })
  .toFile(out);

console.log(`Wrote ${out} (${info.width}x${info.height}, ${Math.round(info.size / 1024)}KB)`);
