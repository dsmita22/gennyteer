import GennyDesktopBrowser from '../utils/GennyDesktopBrowser';
import faker from 'faker';
jest.setTimeout( 60000 );

describe( 'Testing', () => {
    let user;
    let email=faker.internet.email();
    let firstName=faker.name.firstName();
    let lastName=faker.name.lastName();
    let a;
    

        it.skip( 'Intermatch Website', async() =>{

        user= await GennyDesktopBrowser.build( 'https://internmatch.io/' );
        await user.page.click( 'a[class="register-here"]' );
        await user.page.waitForSelector( 'a[class="button-register"]' ,{visible:true});
        await user.page.click( 'a[class="button-register"]' );
        await user.page.type( 'input[id="email"]',email );
        await user.page.type( 'input[id="firstName"]',firstName );
        await user.page.type( 'input[id="lastName"]',lastName );
        await user.page.type( 'input[id="password"]','1234567' );
        await user.page.type( 'input[id="password-confirm"]','1234567' );
        await user.page.click( 'button[type="submit"]' );

        await user.closeBrowser();
    });
    it( 'Intermatch Website', async() =>{

        user= await GennyDesktopBrowser.build( 'https://internmatch.io/' );
        await user.page.setViewport({width:1366, height:1366});
        await user.page.click( 'body > header > div > div > div.box-wrap-menu > a.register-here > span' );
        await user.page.waitForSelector( 'input[id="username"]' ,{visible:true});
        await user.page.type( 'input[id="username"]','dsmita22@gmail.com' );
        await user.page.type( 'input[id="password"]','Test@123' );
        await user.page.click( '#kc-form > form > div > div.input-detail > div.input-submit > button' );
        const items = await page.$$( 'div[data-testid='container']a' );
        console.log(items[0]);
    
    });
}); 