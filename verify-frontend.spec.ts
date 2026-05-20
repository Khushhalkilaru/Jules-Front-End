import { test, expect } from '@playwright/test';

test('capture screenshot', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 2000 });
  await page.goto('http://localhost:3000');
  
  // Wait for 3D model
  await page.waitForTimeout(5000);
  
  // Scroll down slowly to trigger animations
  await page.evaluate(async () => {
    for (let i = 0; i < 2000; i += 100) {
      window.scrollTo(0, i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    window.scrollTo(0, 0); // Back to top
  });

  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'f1-frontend-updated.png', fullPage: true });
});
