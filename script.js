
const puppeteer = require("puppeteer");

async function scrap(url) {
	const browser = await puppeteer.launch({
		: false
});
const page = await browser.nexPage();
await page.goto(url);
await page.waitForSelector("span [title='dhwaj']");
const target = await page.$("span [title='dhwaj']");
await target.click();
const inp = await page.$("#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text");
for (let i = 0; i < 10000; i++) {
	await inp.type("kya halchal");
	await page.keyboard.press("Enter");
}
}
scrap("https://web.whatsapp.com/");
