const Mk = require("./markov")

describe('make chains', function(){
    test('makes .words and .dict', function(){
        let chain = new Mk("the cat in the hat")
        expect(chain.words).toContain("the")
        expect(chain.words).toContain("cat")
        expect(chain.words).toContain("in")
        expect(chain.words).toContain("hat")

        expect(chain.dict["the"]).toBeDefined()
        expect(chain.dict["cat"]).toBeDefined()
        expect(chain.dict["in"]).toBeDefined()
        expect(chain.dict["hat"]).toBeDefined()
    })
    
})

describe('make text', function(){
    test('makes text', function(){
        let chain = new Mk("the cat in the hat")
        let output = chain.makeText()
        expect(output).toBeDefined()
        expect(typeof output === 'string').toBe(true);
    })

})

