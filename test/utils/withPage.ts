import * as puppeteer from 'puppeteer';
import { ExecutionContext, ImplementationResult } from 'ava';

import {
  setupGithubRequestInterception,
  Unsubscriber,
} from './requestInterception';

/**
 * A test runner implementation that includes the puppeteer page
 * as well as a way to unsubscribe from the request interception.
 */
export type ImplementationWithScaffolding<T> = (
  t: ExecutionContext<T>,
  page: puppeteer.Page,
  unsub: Unsubscriber
) => ImplementationResult;

export async function withPage<T>(
  t: ExecutionContext<T>,
  run: ImplementationWithScaffolding<T>
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  const unsubscribe = await setupGithubRequestInterception(page);

  try {
    await run(t, page, unsubscribe);
  } finally {
    unsubscribe();
    await page.close();
    await browser.close();
  }
}
