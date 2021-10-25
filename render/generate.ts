import { writeFile } from 'fs';
import { promisify } from 'util';

const writeFileAsync = promisify(writeFile);

import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(`file://${__dirname}/../index.html`, {
    waitUntil: 'networkidle2',
  });

  const content = await page.content();
  await page.close();
  await browser.close();
  await writeFileAsync('./rendered.html', content, { encoding: 'utf-8' });
})();
