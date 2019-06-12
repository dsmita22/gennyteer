import GennyDesktopBrowser from '../utils/GennyDesktopBrowser';

jest.setTimeout( 60000 );

describe( 'Google', () => {
    let user;

    it( 'should be titled "Google"', async () => {
        user = await GennyDesktopBrowser.build( 'https://www.google.com' );
        await user.page.type( 'input[name="q"]', 'hi' );
        console.log( 'I have written something' );
        await user.closeBrowser();
    });
});
