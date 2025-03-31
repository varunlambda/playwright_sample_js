const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines', () => {
  test('Search LambdaTest on DuckDuckGo', async ({ page }) => {
    await page.goto('https://duckduckgo.com')
    let element = await page.locator("[name=\"q\"]");
    await element.click();
    await element.type("LambdaTest");
    await element.press("Enter");
    const title = await page.title()

    await page.goto('https://duckduckgo.com')
    let element1 = await page.locator("[name=\"q\"]");
    await element1.click();
    await element1.type("LambdaTest");
    await element1.press("Enter");

    await page.goto('https://duckduckgo.com')
    let element2 = await page.locator("[name=\"q\"]");
    await element2.click();
    await element2.type("LambdaTest");
    await element2.press("Enter");

    await page.goto('https://duckduckgo.com')
    let element3 = await page.locator("[name=\"q\"]");
    await element3.click();
    await element3.type("LambdaTest");
    await element3.press("Enter");

    console.log('Page title:: ', title)
    // Use the expect API for assertions provided by playwright
    expect(title).toEqual(expect.stringContaining('Google'))
  })
})

// test.describe('Browse LambdaTest in different search engines', () => {
//   test('Search LambdaTest on DuckDuckGo', async ({ page }) => {
//     await page.goto('http://localhost:63342/java-testng-selenium/camera_access.html?_ijt=btmji96rlp0auhlgff3648s8gi&_ij_reload=RELOAD_ON_SAVE');  // Update path to your HTML file

// // Click the Start Camera button
// await page.click('button');

// // Wait for video stream to load
// await page.waitForSelector('video');

// // Verify if camera access is working
// const isVideoPlaying = await page.evaluate(() => {
//     const video = document.querySelector('video');
//     return video && video.readyState === 4; // ReadyState 4 means enough data is available for playback
// });

// console.log(isVideoPlaying ? "✅ Camera is working!" : "❌ Camera failed to start.");

// // Keep the browser open for testing
// await page.waitForTimeout(5000);
//   })
// })
