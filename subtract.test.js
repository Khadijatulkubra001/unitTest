const subtract = require('./subtract')
test('subtracts 2 - 1 equals 1', () => {
    expect (subtract(2, 1)).toBe(1)
})