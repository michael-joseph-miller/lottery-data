import puppeteer from 'puppeteer';

const latestPowerballDrawing = async () => {
  console.log('latestPowerballDrawing called');

  const data = {};

  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto('https://www.powerball.com/games/home', {
    waitUntill: ['load', 'domcontentloaded', 'networkidle0'],
  });

  data.name = 'Powerball';
  data.nextDrawDate = await page.$eval(
    '.next-drawing>span',
    (el) => el.innerText
  );
  data.nextJackpot = await page.$eval(
    '.estimated-jackpot>.number',
    (el) => el.innerText
  );
  data.cashOption = await page.$eval('.cash-value', (el) =>
    el.innerText.slice(12)
  );
  data.drawDate = await page.$eval('.field_draw_date', (el) =>
    el.innerText.slice(18)
  );
  data.winningNumbers = await page.$$eval(
    '.number-card[data-slick-index="0"] .field_numbers .numbers-ball',
    (els) => els.map((el) => el.innerText).slice(0, 6)
  );
  data.multiplier = await page.$eval(
    '.field_multiplier>span',
    (el) => el.innerText
  );

  await browser.close();

  console.log('latestPowerballDrawing end');
  return data;
};

export { latestPowerballDrawing };
