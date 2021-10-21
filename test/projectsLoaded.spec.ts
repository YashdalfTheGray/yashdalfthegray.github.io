import test from 'ava';
import { withPage } from './utils/withPage';

test.skip('projects are loaded properly', withPage, async (t, page) => {
  await page.goto(process.env.WEBSITE_URL);

  await page.waitForSelector('.project-card');
  const projectCards = await page.$$('.project-list .project-card');

  t.snapshot(await page.content());
  t.is(projectCards.length, 6);
});
