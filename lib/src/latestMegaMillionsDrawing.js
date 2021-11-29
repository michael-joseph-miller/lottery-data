import puppeteer from 'puppeteer';

const latestMegaMillionsDrawing = async () => {
  console.log('latestMegaMillionsDrawing called');

  const data = {};

  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto('https://www.megamillions.com', {
    waitUntill: ['load', 'domcontentloaded', 'networkidle0'],
  });

  data.name = 'Mega Millions';
  data.nextDrawDate = await page.$eval('.nextDrawDate', (el) => el.innerText);
  data.nextJackpot = await page.$eval('.nextEstVal', (el) => el.innerText);
  data.cashOption = await page.$eval('.nextCashOpt', (el) => el.innerText);
  data.drawDate = await page.$eval('.lastestDate', (el) => el.innerText);
  data.winningNumbers = await page.$$eval('.numbers>.ball', (els) =>
    els.map((el) => el.innerText)
  );
  data.multiplier = await page.$eval('.winNumMP', (el) => el.innerText);

  await browser.close();

  console.log('latestMegaMillionsDrawing end');

  return data;
};

export { latestMegaMillionsDrawing };
