import puppeteer from "puppeteer";

export class Browser {

    async launch() {
        const browser = await puppeteer.launch();
        return await browser.newPage();
    }
}