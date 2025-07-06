import { test, expect } from '@playwright/test';

test('Pesquisa de produto em até 2s', async ({ page }) => {
  await page.goto('https://agromart.example.com/search');
  const start = Date.now();
  await page.fill('input[name="q"]', 'tratores');
  await page.click('button[type="submit"]');
  const duration = (Date.now() - start) / 1000;
  expect(duration).toBeLessThanOrEqual(2);
});