import React from 'react';
import PrintJson from "./MethodHandler.js";
import FormRequest from "./FormRequest";

/**
 * Main Content per fare la richiesta GET
 */
class MainContent extends React.Component { 
    constructor(){
        super()
        this.state={
            object: null
        }
    }

    handleClick ()
    {
        let method = document.getElementById("method").value 
            ? document.getElementById("method").value 
            : "GET";

        this.setState(
            {
                object: null,
                isLoading: true,
                method: method
            }
        );

        let url = document.getElementById("input_url").value;

        if (url === "")
        {
            alert("URL vuota");
            return;
        }
        
        if (method === "GET")
        {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        object: data,
                        isLoading: true,
                        method: method
                    }
                )
            })
        }
        // TODO
        else if (method === "POST")
        {
            this.setState(
                {
                    object: null,
                    isLoading: false,
                    method: method
                }
            );
        }
        else if(method === "DELETE")
        {
            this.setState(
                {
                    object : null,
                    isLoading: false,
                    method: method
                }
            )
        }
    }

    render() { 
        return(
            <div className="App mt-2">
                <FormRequest 
                    onClick={() => this.handleClick()}
                />

                <PrintJson object={this.state.object} isLoading={this.state.isLoading} requestMethod={this.state.method}/>
            </div>
        )
    } 
} 
export default MainContent;
