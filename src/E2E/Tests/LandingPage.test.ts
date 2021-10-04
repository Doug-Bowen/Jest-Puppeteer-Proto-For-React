import {LandingPage} from '../PageObjects/LandingPage.PageObject';
import {Browser} from '../Utils/Browser';

const landingPage = new LandingPage();
const browser = new Browser();
jest.setTimeout(30000);

describe('Landing Page', () => {
    it("Smoke", async () => {
        let page = await browser.launch();
        await page.goto(landingPage.url);
        await page.waitForSelector(landingPage.reactLogo);
        await page.close();
    });
});