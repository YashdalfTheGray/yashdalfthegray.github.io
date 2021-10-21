import { HTTPRequest, Page, ResponseForRequest } from 'puppeteer';
import { v4 as uuidv4 } from 'uuid';

export type Unsubscriber = () => void;

export function getMockResponseFor(url: string): ResponseForRequest {
  const body = {
    id: uuidv4(),
    name: url.split('/').pop(),
    description: 'This is a test description for the project',
    html_url: url,
    language: 'Typescript',
  };

  return {
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(body),
  } as ResponseForRequest;
}

export async function setupGithubRequestInterception(
  page: Page
): Promise<Unsubscriber> {
  const handler = (request: HTTPRequest) => {
    if (
      request.resourceType() === 'fetch' &&
      request.url().includes('api.github.com')
    ) {
      request.respond(getMockResponseFor(request.url()));
    } else {
      request.continue();
    }
  };

  page.on('request', handler);

  return () => {
    page.off('request', handler);
  };
}
