import { test, expect } from '@playwright/test';

test('Fluxo de compra básico', async ({ page }) => {
  await page.goto('https://agromart.example.com');
  await page.fill('input[name="search"]', 'fertilizante');
  await page.click('button[type="submit"]');
  await page.click('.product-item >> nth=0');
  await page.click('text=Adicionar ao carrinho');
  await page.click('text=Checkout');
  const start = Date.now();
  await page.fill('input[name="address"]', 'Rua A, 123');
  await page.click('text=Confirmar pedido');
  const duration = (Date.now() - start) / 1000;
  expect(duration).toBeLessThanOrEqual(180);
});