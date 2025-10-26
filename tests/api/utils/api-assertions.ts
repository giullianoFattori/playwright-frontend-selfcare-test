import { expect } from '@playwright/test';

export const expectSuccess = (responseStatus: number): void => {
  expect.soft(responseStatus, 'Unexpected response status').toBeGreaterThanOrEqual(200);
  expect.soft(responseStatus, 'Unexpected response status').toBeLessThan(300);
};
