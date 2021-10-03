import React, { useState } from 'react'

export default function DoMath() {
    const [result, setResult] = useState('Waiting for input ...');

    function check(val) {
        const validate = require('../scripts/NameValidate')
        setResult(validate(val.target.value) ? "Vaild" : "Invalid")
    }

    return (
        <>
            <p>Input Name for validate</p>
            <input onChange={check}></input>
            <p style={{ color: result === "Vaild" ? "green" : "red" }}>{result}</p>
        </>
    )
}
