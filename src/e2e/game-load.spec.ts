import { test, expect } from '@playwright/test';


test('home page loads', async ({ page }) => {
  // navigate to page
  await page.goto('http://localhost:3000');
  // expect home page
  await expect(page.locator('h2', { hasText: 'Welcome to Zurdle!'})).toBeVisible();
  await expect(page.locator('button', {hasText: 'Enter a Word'})).toBeVisible();
})