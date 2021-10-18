import test from 'ava';
import { withPage } from './utils/withPage';

test.serial('canary', withPage, async (t, page) => {
  await page.goto(process.env.WEBSITE_URL);
  const contactsListElements = await page.$$('.contacts-list span');

  t.snapshot(await page.content());

  t.is(await page.title(), 'Yash Kulshrestha');
  t.is(contactsListElements.length, 7);
});
