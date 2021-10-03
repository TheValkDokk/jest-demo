const validate = require('../scripts/NameValidate')
const Text = require('../files/TestTxt.js')

test('Input John Doe and return true', () => {
    console.log(Text);
    expect(validate('John Doe')).toBe(true)
})

