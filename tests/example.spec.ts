import { test, expect } from '@playwright/test';

test('instagram login', async ({ page }) => {
  await page.goto('https://instagram.com');

  let checkElement = page.locator('xpath=//html/body/div[1]/div/div/div/div[1]/div/div/div/div[1]/section/nav/div[2]/div/div/div[2]/div[1]/div/span')
  await expect(checkElement).toHaveClass('_aawc _aawd')
  let cookies = await page.context().cookies()
  let sessionid = cookies.filter(item => item.name === 'sessionid')[0].value;
  console.log(sessionid);
});

test('classroomeditor login', async ({ page }) => {
  await page.goto('https://classroomeditor.tk');
  await expect(page).toHaveURL('https://classroomeditor.tk/login/signup')
});
