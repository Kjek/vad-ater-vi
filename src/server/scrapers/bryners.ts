import puppeteer from 'puppeteer';

const bryners = async () => {
  console.log('Hämtar bryners meny!');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://bryners.se/veckans-lunch-v-j/bryners-bistro.html ', {
    waitUntil: 'networkidle0',
  });

  const lunchMenu = await page.evaluate(() => {
    const days = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag'];
    const menuItems = Array.from(document.querySelectorAll('ul'))
      .filter((ul) =>
        days.includes(
          ul.previousElementSibling?.textContent?.split(' ')[0] ?? ''
        )
      )
      .map((item) => {
        const title = item.previousElementSibling?.textContent;
        const menu = item.textContent;
        return { title, menu };
      });

    // days.includes(ul.previousElementSibling.textContent.split(" ")[0])

    return menuItems;
  });

  console.debug(lunchMenu);

  await browser.close();
};

export default bryners;
