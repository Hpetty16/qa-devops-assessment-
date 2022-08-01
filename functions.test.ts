const {shuffleArray} = require('./utils')

const myArray1 = [`hi`,`robot`,`Haywood`]
const myArray2 = [2,4,6,8,10]
const myArray3 = []

describe('shuffleArray should', () => {
    test(`return array`, () => {
        expect(Array.isArray(shuffleArray(myArray1))).toBe(true)
        expect(Array.isArray(shuffleArray(myArray2))).toBe(true)
        expect(Array.isArray(shuffleArray(myArray3))).toBe(true)
    })

    test(`check that it returns an array of the same length as the argument sent in`, () => {
        expect(shuffleArray(myArray1).length).toBe(myArray1.length)
        expect(shuffleArray(myArray2).length).toBe(myArray2.length)
        expect(shuffleArray(myArray3).length).toBe(myArray3.length)
    })
})