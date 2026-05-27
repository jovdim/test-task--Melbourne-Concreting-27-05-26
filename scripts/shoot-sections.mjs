// Per-section screenshots at desktop width for detailed visual review.
import puppeteer from 'puppeteer-core';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = process.env.URL || 'http://localhost:4322/';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars', '--force-color-profile=srgb'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: 'networkidle0' });
await page.evaluate(() =>
  document.querySelectorAll('[data-reveal]').forEach((e) => e.classList.add('is-visible'))
);
// force all lazy images to load + wait, so section shots aren't blank
await page.evaluate(async () => {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => (img.loading = 'eager'));
  document.querySelectorAll('iframe[loading="lazy"]').forEach((f) => (f.loading = 'eager'));
  await Promise.all(
    [...document.images]
      .filter((i) => !i.complete)
      .map((i) => new Promise((r) => { i.onload = i.onerror = r; }))
  );
});
await new Promise((r) => setTimeout(r, 1600));

const shots = [
  ['.hero', 'sec-hero.png'],
  ['.problem', 'sec-problem.png'],
  ['#services', 'sec-services.png'],
  ['#about', 'sec-about.png'],
  ['.whyus', 'sec-whyus.png'],
  ['#process', 'sec-process.png'],
  ['#work', 'sec-gallery.png'],
  ['.testimonials', 'sec-testimonials.png'],
  ['#faq', 'sec-faq.png'],
  ['#quote', 'sec-contact.png'],
  ['.map-band', 'sec-map.png'],
  ['.site-footer', 'sec-footer.png'],
];

for (const [sel, file] of shots) {
  const el = await page.$(sel);
  if (el) {
    await el.screenshot({ path: file });
    console.log('✓', file);
  } else {
    console.log('✗ not found:', sel);
  }
}

// floating buttons in scrolled state (WhatsApp + back-to-top)
await page.evaluate(() => window.scrollTo(0, 1600));
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({ path: 'sec-floating.png' });
console.log('✓ sec-floating.png');

await browser.close();
