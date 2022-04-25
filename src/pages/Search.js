import React from "react"
import FilmsLibrary from "../FilmsLibrary.json"

export default class Search extends React.Component{

    state = {
        Film: [...FilmsLibrary]
    }
    render(){
        console.log(this.state)
        return(
            <>
             {this.state.Film.map(item => (
                 <div>
                     <h2>{item.name}</h2>
                 </div>
             ))}
            </>
        )
    }
}