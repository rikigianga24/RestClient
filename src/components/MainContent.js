
import React from 'react'
import Header from "./Header.js";
import Table from "./Table.js"


class MainContent extends React.Component { 
    constructor(){
        super()
        this.state={
            object : []
        }
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
       
        .then(data => {
        this.setState(
                {object : data}
                )
        })
        .then(data => console.log(data))
    }
    render() { 
        return(
            <div className="App">
                
                <Table object={this.state.object} />
                
            </div>
        )
    } 
} 
export default MainContent;


