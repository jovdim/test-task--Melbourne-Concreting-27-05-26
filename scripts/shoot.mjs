// Full-page screenshots using system Chrome (no browser download).
import puppeteer from 'puppeteer-core';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = process.env.URL || 'http://localhost:4321/';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars', '--force-color-profile=srgb'],
});

async function prep(page) {
  await page.evaluate(() =>
    document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-visible'))
  );
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => (img.loading = 'eager'));
    await Promise.all(
      [...document.images]
        .filter((i) => !i.complete)
        .map((i) => new Promise((r) => { i.onload = i.onerror = r; }))
    );
  });
  await new Promise((r) => setTimeout(r, 600));
}

const page = await browser.newPage();

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: 'networkidle0' });
await prep(page);
await page.screenshot({ path: 'screenshot-desktop.png', fullPage: true });
console.log('✓ screenshot-desktop.png');

await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true });
await page.goto(URL, { waitUntil: 'networkidle0' });
await prep(page);
await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });
console.log('✓ screenshot-mobile.png');

await browser.close();
