import React from 'react';
import FormPost from './functional/FormPost';

class Post extends React.Component
{
    constructor(props)
    {
        super(props)
        this.url = props.url
        this.state = {
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

        let obj = 
            {
                time: t,
                aHum: a_hum,
                aTemp: a_temp,
                bHum: b_hum,
                bTemp: b_temp,
                extHum: ext_hum,
                extTemp: ext_temp
            }

            console.log(obj)

        let xml = new XMLHttpRequest();
        
        xml.onload = data => {

            // FIXME 
            // da data va preso l'eventuale errore

            this.setState(
                {
                    error: null,
                    url: this.state.url
                }
            );
        }

        xml.open("POST", this.url);
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