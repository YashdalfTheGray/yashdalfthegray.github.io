import * as puppeteer from 'puppeteer';
import { ExecutionContext, Implementation, ImplementationResult } from 'ava';

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
  try {
    await run(t, page);
  } finally {
    await page.close();
    await browser.close();
  }
}
