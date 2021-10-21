import * as puppeteer from 'puppeteer';
import { ExecutionContext, ImplementationResult } from 'ava';

import { setupGithubRequestInterception } from './requestInterception';

export type ImplementationWithPage<T> = (
  t: ExecutionContext<T>,
  page: puppeteer.Page
) => ImplementationResult;

export async function withPage<T>(
  t: ExecutionContext<T>,
  run: ImplementationWithPage<T>
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  const unsubscribe = await setupGithubRequestInterception(page);

  try {
    await run(t, page);
  } finally {
    unsubscribe();
    await page.close();
    await browser.close();
  }
}
