import { test, expect, Page } from '@playwright/test';

/*
  This test plays throught an entire game and verifies that the proper colors are used when displaying results.

  The solution is HORSE

  Three guesses are made:
    - FLOOR
    - BOOMS
    - HORSE
*/

test('play game with solution HORSE', async ({ page }) => {
  // navigate to page
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Enter a Word' }).click();
  // enter solution word and go
  await page.getByRole('textbox').fill('horse');
  await page.getByRole('button', { name: 'Go!' }).click();
  // expect keyboard keys we will use to be visible (TODO: don't verify visibility of keys here. create a seperate spec to verify keyboard for all keys)
  await expect(page.getByRole('button', { name: 'f', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'l', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'o', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'r', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Enter', exact: true })).toBeVisible();
  // click keys to make first guess
  await page.getByRole('button', { name: 'f', exact: true }).click();
  await page.getByRole('button', { name: 'l', exact: true }).click();
  await page.getByRole('button', { name: 'o', exact: true }).click();
  await page.getByRole('button', { name: 'o', exact: true }).click();
  await page.getByRole('button', { name: 'r', exact: true }).click();
  await page.getByRole('button', { name: 'Enter', exact: true }).click();
  // verify
  await verifyFirstGuess(page);
  // verify keyboard updated properly
  await expect(page.getByRole('button', { name: 'f', exact: true })).toContainClass('red-box');
  await expect(page.getByRole('button', { name: 'l', exact: true })).toContainClass('red-box');
  await expect(page.getByRole('button', { name: 'o', exact: true })).toContainClass('yellow-box');
  await expect(page.getByRole('button', { name: 'r', exact: true })).toContainClass('yellow-box');
  // verify done message not visible
  await expect(page.getByRole('heading', { name: 'Hooray!!!'})).not.toBeVisible();
  // click keys to make second guess
  await page.getByRole('button', { name: 'b', exact: true }).click();
  await page.getByRole('button', { name: 'o', exact: true }).click();
  await page.getByRole('button', { name: 'o', exact: true }).click();
  await page.getByRole('button', { name: 'm', exact: true }).click();
  await page.getByRole('button', { name: 's', exact: true }).click();
  await page.getByRole('button', { name: 'Enter', exact: true }).click();
  // verify guesses
  await verifyFirstGuess(page);
  await verifySecondGuess(page);
  //verify keyboard updated properly
  await expect(page.getByRole('button', { name: 'b', exact: true })).toContainClass('red-box');
  await expect(page.getByRole('button', { name: 'o', exact: true })).toContainClass('green-box');
  await expect(page.getByRole('button', { name: 'm', exact: true })).toContainClass('red-box');
  await expect(page.getByRole('button', { name: 's', exact: true })).toContainClass('yellow-box');
  // verify done message not visible
  await expect(page.getByRole('heading', { name: 'Hooray!!!'})).not.toBeVisible();
  // click keys to make third guess
  await page.getByRole('button', { name: 'h', exact: true }).click();
  await page.getByRole('button', { name: 'o', exact: true }).click();
  await page.getByRole('button', { name: 'r', exact: true }).click();
  await page.getByRole('button', { name: 's', exact: true }).click();
  await page.getByRole('button', { name: 'e', exact: true }).click();
  await page.getByRole('button', { name: 'Enter', exact: true }).click();
  // verify guesses
  await verifyFirstGuess(page);
  await verifySecondGuess(page);
  await verifyThirdGuess(page);
  // verify done message is visible
  await expect(page.getByRole('heading', { name: 'Hooray!!!'})).toBeVisible();
});

const verifyFirstGuess = async (page: Page) => {
  // verify proper values and colors on first row
  await expect(page.locator('.letter-box').nth(0)).toHaveText('f');
  await expect(page.locator('.letter-box').nth(0)).toContainClass('red-box');
  await expect(page.locator('.letter-box').nth(1)).toHaveText('l');
  await expect(page.locator('.letter-box').nth(1)).toContainClass('red-box');
  await expect(page.locator('.letter-box').nth(2)).toHaveText('o');
  await expect(page.locator('.letter-box').nth(2)).toContainClass('yellow-box');
  await expect(page.locator('.letter-box').nth(3)).toHaveText('o');
  await expect(page.locator('.letter-box').nth(3)).toContainClass('yellow-box');
  await expect(page.locator('.letter-box').nth(4)).toHaveText('r');
  await expect(page.locator('.letter-box').nth(4)).toContainClass('yellow-box');
}

const verifySecondGuess = async (page: Page) => {
  // verify proper values and colors on second row
  await expect(page.locator('.letter-box').nth(5)).toHaveText('b');
  await expect(page.locator('.letter-box').nth(5)).toContainClass('red-box');
  await expect(page.locator('.letter-box').nth(6)).toHaveText('o');
  await expect(page.locator('.letter-box').nth(6)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(7)).toHaveText('o');
  await expect(page.locator('.letter-box').nth(7)).toContainClass('red-box');
  await expect(page.locator('.letter-box').nth(8)).toHaveText('m');
  await expect(page.locator('.letter-box').nth(8)).toContainClass('red-box');
  await expect(page.locator('.letter-box').nth(9)).toHaveText('s');
  await expect(page.locator('.letter-box').nth(9)).toContainClass('yellow-box');
}

const verifyThirdGuess = async (page: Page) => {
  // verify proper values and colors on third row
  await expect(page.locator('.letter-box').nth(10)).toHaveText('h');
  await expect(page.locator('.letter-box').nth(10)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(11)).toHaveText('o');
  await expect(page.locator('.letter-box').nth(11)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(12)).toHaveText('r');
  await expect(page.locator('.letter-box').nth(12)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(13)).toHaveText('s');
  await expect(page.locator('.letter-box').nth(13)).toContainClass('green-box');
  await expect(page.locator('.letter-box').nth(14)).toHaveText('e');
  await expect(page.locator('.letter-box').nth(14)).toContainClass('green-box');
}