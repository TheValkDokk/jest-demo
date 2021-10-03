function validate(input) {

    const validLength = input.length >= 8  //check input length
    //Validate Logic
    
    //Short version but may hard to understand

    let hasLetter = /[a-zA-Z]/g.test(input) //Logic for validate input have Letter
    let hasNumber = /[0-9]/g.test(input) //Logic for validate input have Number

    //Long version but easier to understand

    // let hasLetter = false;
    // const A2Z = "abcdefghijklmnopqrstuvwxyz" //from A to Z
    // for (const letter of A2Z) {
    //     if (input.toLowerCase().includes(letter)) {
    //         hasLetter = true
    //     }
    // }
    
    // let hasNumber = false;
    // const zero2nine = "0123456789" //from 0 to 9
    // for (const number of zero2nine) {
    //     if (input.includes(number)) {
    //         hasNumber = true
    //     }
    // }

    return hasNumber && hasLetter && validLength
}
module.exports = validate