import React from 'react';
import FormPost from './functional/FormPost';

class Post extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            url: "http://94.176.46.49:8000/api/observation",
            error: null
        }
    }

    handleSubmit(event)
    {
        event.preventDefault();

        // FIXME
        let t = document.getElementById("post_time");
        let a_hum = document.getElementById("post_a_hum");
        let a_temp = document.getElementById("post_a_temp");
        let b_temp = document.getElementById("post_b_temp");
        let b_hum = document.getElementById("post_b_hum");
        let ext_hum = document.getElementById("post_ext_hum");
        let ext_temp = document.getElementById("post_ext_temp");

        let xml = new XMLHttpRequest();
        
        xml.onload = data => {

            // FIXME 
            // da data va preso l'eventuale errore

            this.setState(
                {
                    url: this.state.url,
                    error: null
                }
            );
        }

        xml.open("POST", this.state.url);
        xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
        xml.setRequestHeader("Accept", "application/json")
        xml.send();
    }

    render()
    {
        return (
            <FormPost error={this.state.error} onSubmit={event => this.handleSubmit(event)}/>
        );
    }
}

export default Post;