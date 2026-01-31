import { test, expect } from '@playwright/test';

//testcase: Pos_Fun_0001

test('Pos_Fun_0001: Standard Greeting', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

  const singlishInput = 'aayuboovan!';
  const expectedSinhala = 'ආයුබෝවන්!';

  const inputField = page.locator('[placeholder="Input Your Singlish Text Here."]');
  await expect(inputField).toBeVisible();

  await inputField.fill('');
  await inputField.pressSequentially(singlishInput, { delay: 50 });

  const outputField = page.locator('text=Sinhala').locator('..').locator('div').nth(1);

  await expect(outputField).toContainText(expectedSinhala, { timeout: 5000 });

  console.log('Test Pos_Fun_0001 executed successfully');

});