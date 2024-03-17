/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.dict = {};
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    for (let i = 0; i < this.words.length; i++) {
      if (!this.dict[this.words[i]]) {
        this.dict[this.words[i]] = [this.words[i + 1]];
      } else {
        this.dict[this.words[i]].push(this.words[i + 1]);
      }
    }
    // console.log(this.dict)
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let text = "";

    // Using an array of values, select a random key
    let keys = Object.keys(this.dict);
    let rand = Math.floor(Math.random() * keys.length);

    // Then get randomWord using rand. This is a randomly chosen key
    // ["the", "cat", "in", "hat"]
    let randomWord = keys[rand];

    // Append random word to text
    text += randomWord + " "

    // Run loop for remaining words
    for (let i = 0; i < numWords - 1; i++) {

      // Get list of values for word/key
      let keyWords = this.dict[randomWord];

      // Pick random value from keyWords
      rand = Math.floor(Math.random() * keyWords.length);

      // This is a new random word.
      randomWord = keyWords[rand];

      if (randomWord == undefined) {
        return text
      } else {
        //Append that value to text
        text += randomWord + " ";
      }

      // On next loop, keyword list is changed to current value for randomWord

    }
    return text;
  }
}

module.exports = MarkovMachine;
