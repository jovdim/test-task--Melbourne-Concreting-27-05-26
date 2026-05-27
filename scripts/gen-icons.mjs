// Rasterise the SVG favicon into PNG app icons (run from project root).
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg');
const make = (size, name) =>
  sharp(svg, { density: 512 }).resize(size, size).png().toFile(`public/${name}`);

await Promise.all([
  make(180, 'apple-touch-icon.png'),
  make(192, 'icon-192.png'),
  make(512, 'icon-512.png'),
  make(32, 'favicon-32.png'),
]);

console.log('✓ icons generated: apple-touch-icon, icon-192, icon-512, favicon-32');
