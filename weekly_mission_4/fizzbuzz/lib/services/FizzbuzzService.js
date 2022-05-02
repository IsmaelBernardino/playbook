class FizzbuzzService {
  static applyValidationInExplorer(explorer) {
    if (explorer.score % 3 === 0) {
      explorer.trick = "FIZZ";
      return console.log(explorer);
    } else if (explorer.score % 5 === 0) {
      explorer.trick = "BUZZ";
      return console.log(explorer);
    } else if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
      explorer.trick = "FIZZBUZZ";
      return console.log(explorer);
    } else {
      explorer.trick = explorer.score;
      return console.log(explorer);
    }
  }
}

module.exports = FizzbuzzService