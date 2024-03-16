/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    // this.makeChains();
  }


  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let dict = {}
    for(let i = 0; i <this.words.length; i++){
      if(!dict[this.words[i]]){
        dict[this.words[i]] = [this.words[i+1]]
      } else{
        dict[this.words[i]].push(this.words[i+1])
      }
    }
    console.log(dict)
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    text = []
    for(let i = 0; i< numWords; i++){

    }
  }
}


let mm = new MarkovMachine("the cat in the hat");
// mm.makeText();
mm.makeChains()
// console.log(mm.words)


module.export = MarkovMachine