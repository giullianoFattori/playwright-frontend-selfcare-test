# Playwright Frontend Test Automation Skeleton

This project provides a full starter kit for frontend test automation powered by [Playwright](https://playwright.dev/) and TypeScript. It follows the Page Object Model, ships with UI and API samples, applies clean code practices, and is ready for local execution, reporting, and GitHub Actions integration.

## Requirements

- Node.js 18+ (20 recommended)
- npm 9+

## Installation

```bash
npm install
```

The `postinstall` script automatically installs the browsers required by Playwright.

## Available Scripts

- `npm run test:ui` – Run every Playwright UI test in headless mode.
- `npm run test:ui:headed` – Run UI tests with a visible browser.
- `npm run test:ui:debug` – Run UI tests with the debug inspector.
- `npm run test:api` – Run only the API specs inside `tests/api`.
- `npm run lint` – Check the codebase with ESLint.

## Folder Structure

```
tests/
  api/
    clients/    # API clients
    specs/      # API test specs
    utils/      # Assertions and API helpers
  shared/       # Shared configuration (env validation, constants, etc.)
  ui/
    fixtures/   # Reusable Playwright fixtures
    pages/      # Page Objects following POM
    specs/      # UI test specs
    utils/      # UI helpers and assertions
```

## Reports

After each run the following reports are generated automatically:

- `playwright-report/` – Interactive Playwright HTML report.
- `reports/results.xml` – JUnit report for CI integrations.
- `artifacts/` – Screenshots and videos when enabled.

## Continuous Integration

The workflow at `.github/workflows/playwright.yml` runs linting, tests, and publishes artifacts on every push or pull request targeting `main`.

## Code Conventions

- Page Objects encapsulate UI interactions.
- Shared helpers avoid duplicated logic across specs.
- ESLint (with TypeScript rules) enforces code style and quality.

## Environment Variables

Set `BASE_URL` if you need to override the default `https://playwright.dev`. Variables are validated by the schema in `tests/shared/environment.ts`.

## Quick Usage Example

The command below runs only the UI specs tagged `@smoke`, shows the browser, and opens the Playwright trace viewer at the end:

```bash
npm run test:ui:headed -- --grep @smoke --trace on
```

If you are getting started locally, try the sample home page test:

```bash
npm run test:ui -- tests/ui/specs/home.spec.ts
```

Playwright will generate the HTML report in `playwright-report/index.html` as soon as the run finishes.

## Creating a New Test

1. Create a new spec file under `tests/ui/specs` (for UI) or `tests/api/specs` (for API). Use a descriptive file name such as `user-profile.spec.ts`.
2. Import the shared fixtures and Page Objects you need:
   ```ts
   import { test, expect } from '@playwright/test';
   import { HomePage } from '../pages/home.page';
   ```
3. Arrange test data inside `test.beforeEach` when it is reusable, and instantiate Page Objects inside the test body.
4. Write focused assertions that verify one behavior per test. Tag scenarios with `@smoke`, `@regression`, etc. so you can filter with `--grep`.
5. Run your new test with one of the npm scripts, for example:
   ```bash
   npm run test:ui -- tests/ui/specs/user-profile.spec.ts
   ```

For API tests follow the same steps using the API clients available in `tests/api/clients`.

## Support the Project

If this template saved you time, consider buying me a coffee:

- Direct link: https://wise.com/pay/me/giullianof9

![Buy me a coffee QR code](docs/coffee-qr.png)
