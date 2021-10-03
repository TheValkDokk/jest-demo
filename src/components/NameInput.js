import React, { useState } from 'react'

export default function NameInput() {

    const [status, setStatus] = useState("Waiting input");
    const validate = require('../scripts/NameValidate')

    function Text() {
        const fs = require('fs')
        console.log(fs.readFileSync('/Test.txt'));
    }

    function check(val) {
        let result = validate(val.target.value) ? "true" : "false"
        console.log(result)
        setStatus(result)
    }

    return (
        <div>
            <input onChange={Text}></input>
            <p>{status}</p>
        </div>
    )
}
