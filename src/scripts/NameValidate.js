function validate(input) {
    return /^[a-zA-Z ]+$/.test(input)
}
module.exports = validate