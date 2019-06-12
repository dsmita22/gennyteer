const puppeteer = require( 'puppeteer' );

describe( 'Google', () => {
    it( 'should be titled "Google"', async () => {
        const args = ['--no-sandbox'];
        const browser = await puppeteer.launch({
            args,
            headless: false
        });
        const page = await browser.newPage();
        await page.goto( 'https://google.com' );
        await expect( page.title()).resolves.toMatch( 'Google' );
        await browser.close();
    });
});
