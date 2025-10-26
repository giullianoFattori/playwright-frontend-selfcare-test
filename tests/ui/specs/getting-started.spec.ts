import { expect } from '@playwright/test';

import { test } from '../fixtures/baseTest';
import { HomePage } from '../pages/home.page';

test.describe('Playwright documentation', () => {
  test('should open intro page from home', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.waitForPageReady();
    await homePage.navigateToDocs();

    await expect(page).toHaveURL(/docs/);
  });
});
