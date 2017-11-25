import React from 'react'
import validateInput from '../decorators/validateInput'


function commentText(props){
    const {val, cName, onChange, onBlur} = props
    return(
        <textarea name = "text" placeholder = "Comment text" value={val}
                  onChange={onChange} onBlur={onBlur} className={cName}/>
    )
}


export default validateInput(commentText)