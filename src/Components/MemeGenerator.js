import React, {Component} from "react"
import Meme from "./Meme"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            randomImg : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs : memes })
            })
        }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    handleSubmit(event){
        event.preventDefault()
        const rndNumber = Math.floor(Math.random() *
            this.state.allMemeImgs.length)
        const rndMemImg = this.state.allMemeImgs[rndNumber].url
        this.setState({randomImg : rndMemImg})
    }
   
    render(){
        return(
        <Meme 
          handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}
          {...this.state} />
        )
    }

}

export default MemeGenerator