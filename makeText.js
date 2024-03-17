/** Command-line tool to generate Markov text. */

const Mk = require('./markov')
const axios = require('axios')
const fs = require('node:fs')

async function makeText(args) {      
    if(args[2] == 'file'){
        // File logic

        fs.readFile(args[3],'utf8', (err,data) =>{
            if(err){
                console.log(err)
            } else{
                let markovText = new Mk(data)
                markovText.makeText()
                console.log(markovText.makeText())
            }
        })
    } else if(args[2] == 'url'){
        // url logic
        try{
            let urlText = await axios.get(args[3])
            let markovText = new Mk(urlText.data)
            markovText.makeText()
            console.log(markovText.makeText())
        } catch{
            console.log("Invalid URL.")
        }
        
    } else{
        throw Error('Invalid arguments')
    }
} 


makeText(process.argv);
