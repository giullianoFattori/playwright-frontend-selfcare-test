import type { Page } from '@playwright/test';

export const waitForNetworkIdle = async (page: Page): Promise<void> => {
  await page.waitForLoadState('networkidle');
};

export const takeScreenshot = async (page: Page, name: string): Promise<void> => {
  await page.screenshot({ path: `artifacts/${name}.png`, fullPage: true });
};

export const scrollToBottom = async (page: Page): Promise<void> => {
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
};
