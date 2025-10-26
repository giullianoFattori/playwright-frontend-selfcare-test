import { test as base, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export type UIFixtures = {
  page: Page;
};

export const test = base.extend<UIFixtures>({
  page: async ({ page }, use) => {
    await page.goto('/');
    await use(page);
  }
});

export { expect };
