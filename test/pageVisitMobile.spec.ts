import test from 'ava';
import { withPage } from './utils/withPage';

test.serial('visiting the page on mobile works', withPage, async (t, page) => {
  await page.setViewport({ width: 390, height: 850 });
  await page.goto(process.env.WEBSITE_URL);
  const contactsListElements = await page.$$('.contacts-list span');

  t.snapshot(await page.content());

  t.is(await page.title(), 'Yash Kulshrestha');
  t.is(contactsListElements.length, 7);
});
