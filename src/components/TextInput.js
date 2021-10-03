import React,{useState} from 'react'

export default function TextInput() {

    const [Status, SetStatus] = useState('Awaits Input'); //useState to render when Status change
    
    const validate = require('../scripts/validate') //import validate from validate.js

    function check(val){
        const result = validate(val.target.value)? "Vaild" : "Invaild" // check validate from input, return true if correct or false if incorrect
        SetStatus(result) //set Status and re-render the page
    }

    return (
        <div>
            <p>Input Text for validation (must contain letter and number, more than 8 characters</p>
            <input onChange={check}></input>
            <p style={{color : Status === "Vaild"? "green" : "red"}}>{Status}</p>
        </div>
    )
}
