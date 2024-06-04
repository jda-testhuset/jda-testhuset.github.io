import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://jda-testhuset.github.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ID VIKINGERNE/);
});

test('has crew text', async ({ page }) => {
  await page.goto('https://jda-testhuset.github.io/');

  // Click the BESÆTNING link.
  await page.getByRole('link', { name: 'BESÆTNING' }).click();

  // Use XPath to locate the element and verify its text content.
  //const element = await page.locator('xpath=/html/body/div[3]/div[4]/h2');
  //await expect(element).toHaveText('Testhusets søfolk');

  const element = await page.getByTestId('javadsbesaetning');
  await expect(element).toHaveText('Testhusets søfolk');
});
