import React, { useState } from 'react'

export default function DoMath() {
    const [result, setResult] = useState('Waiting for input ...');

    function check(val) {
        const calc = require('../scripts/CalcF2C')
        val.target.value !== '' ?
            setResult(calc(val.target.value) + ' C')
            :
            setResult('NaN')
    }

    return (
        <>
            <p>Input Fahrenheit to convert to Cecius</p>
            <input onChange={check}></input>
            <p>{result}</p>
        </>
    )
}
