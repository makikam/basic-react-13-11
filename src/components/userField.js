import React from 'react'
import validateInput from '../decorators/validateInput'


function userField(props) {
    const {val, cName, onChange, onBlur} = props
    return (
        <input type = "text" name = "user" className = {cName} value = {val}
               placeholder = "User name" onChange = {onChange} onBlur = {onBlur}/>
    )
}


export default validateInput(userField)