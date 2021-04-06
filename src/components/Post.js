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
        let t = document.getElementById("post_time").value;
        let a_hum = document.getElementById("post_a_hum").value;
        let a_temp = document.getElementById("post_a_temp").value;
        let b_temp = document.getElementById("post_b_temp").value;
        let b_hum = document.getElementById("post_b_hum").value;
        let ext_hum = document.getElementById("post_ext_hum").value;
        let ext_temp = document.getElementById("post_ext_temp").value;

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
        
        xml.onload = data => 
        {
            if (xml.status !== 200)
            {
                this.setState(
                    {
                        error: <h4>Il server ha restituito l'errore {xml.status}</h4>
                    }
                );
            }
            else
            {
                this.setState(
                    {
                        error: null
                    }
                );
            }
        }

        xml.open("POST", this.url);
        xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
        xml.send(JSON.stringify(obj));
    }

    render()
    {
        return (
            <FormPost error={this.state.error} onSubmit={event => this.handleSubmit(event)}/>
        );
    }
}

export default Post;