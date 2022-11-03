const multiply = require('./multiply')
test('multiplies 1 * 2 equals 2', () => {
    expect (multiply(1, 2)).toBe(2)
})