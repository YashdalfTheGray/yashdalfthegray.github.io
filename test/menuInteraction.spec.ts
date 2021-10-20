import test from 'ava';
import { withPage } from './utils/withPage';

test.serial('opening the menu works', withPage, async (t, page) => {
  await page.setViewport({ width: 390, height: 850 });
  await page.goto(process.env.WEBSITE_URL);

  await page.waitForSelector('.anchor-menu-button');
  await page.click('.anchor-menu-button');
  await page.waitForSelector('.anchor-menu', { visible: true });
  const headerElements = await page.$$('.anchor-menu.visible a');

  t.snapshot(await page.content());

  await page.click('.anchor-menu-button');
  await page.waitForSelector('.anchor-menu', { hidden: true });

  t.is(headerElements.length, 4);
});
