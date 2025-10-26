import type { APIRequestContext, APIResponse } from '@playwright/test';

export class ExampleClient {
  constructor(private readonly request: APIRequestContext) {}

  async getRepository(owner: string, repo: string): Promise<APIResponse> {
    return this.request.get(`https://api.github.com/repos/${owner}/${repo}`);
  }
}
