
const read = require('fs')

function Text() {
    read.readFile('./Test.txt', 'utf8', (err, data) => {
        console.log(data);
    })
}

module.exports = Text