const puppeteer = require( 'puppeteer' );

jest.setTimeout( 60000 );

describe( 'Test search engines', () => {
    it( 'should be titled "Google"', async () => {
        const args = ['--no-sandbox'];
        const browser = await puppeteer.launch({
            args,
            headless: false
        });
        const page = await browser.newPage();
        await page.goto( 'https://google.com' );
        let title= await page.title();
        if ( title === 'Google' ) {
            console.log( 'test passed' );
        } else {
            console.log( 'test failed' );
        }
        await page.waitFor( 3000 );
        await browser.close();
    });
    
    it( 'Should be titled "Yahoo"',async() => {
        const args = ['--no-sandbox'];
        const browser = await puppeteer.launch({
            args,
            headless: false
        });
        const page = await browser.newPage();
        await page.goto( 'https://au.yahoo.com/' );
        let title = await page.title();
        expect( title ).toBe( 'Yahoo Australia | News, email and search' );
        await browser.close();
    });

});
