import { test, expect } from '@playwright/test';

import { ExampleClient } from '../clients/exampleClient';
import { expectSuccess } from '../utils/api-assertions';

test.describe('GitHub API', () => {
  test('should return repository metadata', async ({ request }) => {
    const client = new ExampleClient(request);
    const response = await client.getRepository('microsoft', 'playwright');

    await expectSuccess(response.status());
    const body = await response.json();

    expect(body).toMatchObject({ name: 'playwright' });
  });
});
