# lottery-data<!-- omit in toc -->

Gets most current lottery data and histories<!-- omit in toc -->

[Report Bug][bug] | [Request Features][features]

---

## Table of Contents<!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

---

## Installation

```sh
npm i lottery-data
```

## Usage

1. Import:
   ```js
   import lotteryData from 'lottery-data';
   ```
2. Use:
   ```js
   const powerballHistory = lotteryData.powerballHistory();
   const megaMillionsHistory = lotteryData.megaMillionsHistory();
   const powerballDrawing = lotteryData.latestPowerbalDrawing();
   const megaMillionsDrawing = lotteryData.latestMegaMillionsDrawing();
   ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: <https://github.com/michael-joseph-miller/lottery-data>

<!-- LINKS & IMAGES -->

[bug]: https://github.com/michael-joseph-miller/lottery-data/issues
[features]: https://github.com/michael-joseph-miller/lottery-data/issues
