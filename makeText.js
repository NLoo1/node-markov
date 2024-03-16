/** Command-line tool to generate Markov text. */

const markov = require('./markov')
const axios = require('axios')
const f = require('node:fs')

async function makeTest(args) {
    try {        
        if(args[2] == 'file'){
            // File logic
        } else if(args[2] == 'url'){
            // url logic
            let urlText = await axios.get(args[2])
            f.writeFile()
        } else{
            throw Error('Invalid arguments')
        }
    } catch{
        console.log("Error");
    }
}

makeTest(process.argv);
