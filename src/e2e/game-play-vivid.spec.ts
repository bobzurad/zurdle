import { test, expect, Page } from '@playwright/test';

/*
  This test plays throught an entire game and verifies that the proper colors are used when displaying results.

  The solution is VIVID

  Three guesses are made:
    - VIVDI
    - VIVID
*/

test('play game with solution VIVID', async ({ page }) => {
  // navigate to page
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Enter a Word' }).click();
  // enter solution word and go
  await page.getByRole('textbox').fill('vivid');
  await page.getByRole('button', { name: 'Go!' }).click();
  // click keys to make first guess
  await page.getByRole('button', { name: 'v', exact: true }).click();
  await page.getByRole('button', { name: 'i', exact: true }).click();
  await page.getByRole('button', { name: 'v', exact: true }).click();
  await page.getByRole('button', { name: 'd', exact: true }).click();
  await page.getByRole('button', { name: 'i', exact: true }).click();
  await page.getByRole('button', { name: 'Enter', exact: true }).click();
  // verify guesses
  await verifyFirstGuess(page);
  // verify keyboard updated properly
  await expect(page.getByRole('button', { name: 'v', exact: true })).toContainClass('green-box');
  await expect(page.getByRole('button', { name: 'i', exact: true })).toContainClass('green-box');
  await expect(page.getByRole('button', { name: 'd', exact: true })).toContainClass('yellow-box');
  // verify done message not visible
  await expect(page.getByRole('heading', { name: 'Hooray!!!'})).not.toBeVisible();
  // click keys to make second guess
  await page.getByRole('button', { name: 'v', exact: true }).click();
  await page.getByRole('button', { name: 'i', exact: true }).click();
  await page.getByRole('button', { name: 'v', exact: true }).click();
  await page.getByRole('button', { name: 'i', exact: true }).click();
  await page.getByRole('button', { name: 'd', exact: true }).click();
  await page.getByRole('button', { name: 'Enter', exact: true }).click();
  // verify guesses
  await verifyFirstGuess(page);
  await verifySecondGuess(page);
  // verify done message is visible
  await expect(page.getByRole('heading', { name: 'Hooray!!!'})).toBeVisible();
});

const verifyFirstGuess = async (page: Page) => {
  // verify proper values and colors on first row
  await expect(page.locator('.letter-box').nth(0)).toHaveText('v');
  await expect(page.locator('.letter-box').nth(0)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(1)).toHaveText('i');
  await expect(page.locator('.letter-box').nth(1)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(2)).toHaveText('v');
  await expect(page.locator('.letter-box').nth(2)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(3)).toHaveText('d');
  await expect(page.locator('.letter-box').nth(3)).toContainClass('yellow-box');
  await expect(page.locator('.letter-box').nth(4)).toHaveText('i');
  await expect(page.locator('.letter-box').nth(4)).toContainClass('yellow-box');
}

const verifySecondGuess = async (page: Page) => {
  // verify proper values and colors on second row
  await expect(page.locator('.letter-box').nth(5)).toHaveText('v');
  await expect(page.locator('.letter-box').nth(5)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(6)).toHaveText('i');
  await expect(page.locator('.letter-box').nth(6)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(7)).toHaveText('v');
  await expect(page.locator('.letter-box').nth(7)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(8)).toHaveText('i');
  await expect(page.locator('.letter-box').nth(8)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(9)).toHaveText('d');
  await expect(page.locator('.letter-box').nth(9)).toContainClass('green-box');
}
