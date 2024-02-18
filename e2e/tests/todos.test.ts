import { expect, test } from "@playwright/test";

test("List of todos", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("/");

  await expect(page).toHaveTitle("Todo Next.js App");
});