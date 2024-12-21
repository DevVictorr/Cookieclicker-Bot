import { test, expect } from '@playwright/test';

test('Pesquisar posts sobre pix', async ({ page }) => {

  test.setTimeout(900_000);
  await page.goto('https://orteil.dashnet.org/cookieclicker/');

  await page.waitForTimeout(10000);
  await page.locator('#langSelect-PT-BR').click();

  const unlockedUpgrade = await page.locator('#upgrades .crate.upgrade.enabled');
  const unlockedProduct = await page.locator('#products .product.unlocked.enabled');
  
  while (1 > 0) {

    const countProduct = await unlockedProduct.count();
    if (countProduct > 0) {
      for (let i = 0; i < countProduct; i++) {
        await page.waitForTimeout(300)
        await unlockedProduct.nth(i).click();
        await page.waitForTimeout(250)
      }
    }

    const countdUpgrade = await unlockedUpgrade.count();
    if (countdUpgrade > 0) {
      for (let i = 0; i < countdUpgrade; i++) {
        await page.waitForTimeout(300)
        await unlockedUpgrade.nth(i).click();
        await page.waitForTimeout(250)
      }
    }

    await page.locator('#bigCookie').click();
    await page.waitForTimeout(100);
  };
});

