import React from 'react';
import Table from "./Table.js";
import FormRequest from "./FormRequest";

class MainContent extends React.Component { 
    constructor(){
        super()
        this.state={
            object : []
        }
    }
    
    componentDidMount(){
        
    }

    handleClick ()
    {
        let url = document.getElementById("input_url").value;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        object: data
                    }
                )
        })
    }

    render() { 
        return(
            <div className="App mt-2">
                <FormRequest 
                    onClick={() => this.handleClick()}
                />

                <Table object={this.state.object} />
            </div>
        )
    } 
} 
export default MainContent;
