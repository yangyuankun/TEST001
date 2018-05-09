const anagram = require("../lib/anagram")

describe("anagram", ()=> {

    it("should return [] when input empty string", ()=> {
        expect(anagram()).toEqual([])
    })
    it("should return a when input is a", ()=> {
        expect(anagram(a)).toBe(a)
})
})