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

    it( 'Tab Website', async() =>{

        user= await GennyDesktopBrowser.build( 'https://www.tab.com.au/join' );
        await user.page.select( 'select[id=jurisdiction-selection-state-of-residence]','ACT' );
        await user.page.click( 'button[class="sg-button block"]' );
        await user.page.waitForSelector( 'label[for="Ms"]' ,{visible:true});
        await user.page.click( 'label[for="Ms"]' );
        await user.page.type( 'input[id="firstName"]', 'Smita' );
        await user.page.type( 'input[id="lastName"]','Dutta' );
        await user.page.select( 'select[id="dob_day"]','22' );
        await user.page.select( 'select[id="dob_month"]','August' );
        await user.page.select( 'select[id="dob_year"]','1994' );
        await user.page.type( 'input[id="phone"]','0400000000' );
        await user.page.type( 'input[id="email"]','testing123@gmail.com' );
        // await user.page.screenshot({path: 'example2.png'});
        await user.closeBrowser();
    });
});
