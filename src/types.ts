export interface IGithubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

export interface IGithubThrottleError {
  message: string;
  documentation_url: string;
}

export interface IRepoOrError extends IGithubRepo, IGithubThrottleError {}
