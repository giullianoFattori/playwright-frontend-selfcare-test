import type { Page } from '@playwright/test';

import { BasePage } from './base.page';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get getStartedButton() {
    return this.page.getByRole('link', { name: 'Get started' });
  }

  async navigateToDocs(): Promise<void> {
    await this.getStartedButton.click();
  }
}
