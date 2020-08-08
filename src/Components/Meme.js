import React from "react"
import TextBox from "./TextBox"

export default function Meme(props){
    return(
        <div>
            <form className = "meme-form" onSubmit = { props.handleSubmit }>
            <TextBox name = "topText" placeholder = "Top" value = {props.topText} handleChange = {props.handleChange} />
            <br />
            <TextBox name = "bottomText" placeholder = "Bottom" value = {props.bottomText} handleChange = {props.handleChange} />
            <br />
            <button> Gen</button>
            </form>
            <div className = "meme">
                <img src = {props.randomImg} alt = "" />
                <h2 className = "top">
                    {props.topText}
                </h2>
                <h2 className = "bottom">
                    {props.bottomText}
                </h2>
            </div>
        </div>
    )
    }
    

