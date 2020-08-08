import React from "react"

export default function TextBox(props){
    return(
            <input 
                type = "text"
                name = { props.name }
                placeholder = { props.placeholder }
                value = { props.value }
                onChange = { props.handleChange }
              />
    )
}

