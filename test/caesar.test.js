const expect = require ("chai").expect
const caesar = require("../src/caesar")

describe("caesar", () =>{
    it("should return the an encoded word", () =>{
        const input = [
            caesar("thinkful", 3) 
        ]
    const expected = 'wklqnixo'
    const actual = caesar(input, shift, encode = true)
    expect(actual).to.equal(expected)
    })
})
describe("caesar", () =>{
    it("should return the an decoded word", () =>{
        const input = [
            caesar("wklqnixo", 3, false)
        ]
    const expected = 'thinkful'
    const actual = caesar(input, shift, encode = false)
    expect(actual).to.equal(expected)
    })
})