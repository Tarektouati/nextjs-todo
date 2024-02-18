import { defineConfig, devices, Project } from "@playwright/test";

const commonTestConfig: Project["use"] = {
  screenshot: "only-on-failure",
  video: "retain-on-failure",
  locale: "en-US",
  timezoneId: "Europe/London",
};

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// eslint-disable-next-line import/no-default-export
export default defineConfig({

  testDir: "./e2e/tests",
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:3000/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...commonTestConfig, ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...commonTestConfig, ...devices["Pixel 5"] },
    },
  ],
});
