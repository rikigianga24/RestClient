import React from 'react';
import PrintSelect from './functional/PrintSelect';
import ServerDownAlert from "./functional/ServerDownAlert";

class Delete extends React.Component
{
    constructor(props)
    {
        super(props)
        this.url = props.url

        this.state = 
        {
            isLoading: true
        }

        this.getAllId()
    }

    getAllId()
    {
        let xml = new XMLHttpRequest()

        xml.onload = data =>
        {
            let risultato = JSON.parse(xml.responseText)

            let ids = []

            for (let ris of risultato)
            {
                ids.push(ris.id)
            }

            console.log(ids)

            this.setState(
                {
                    isLoading: false,
                    ids: ids
                }
            );
        }

        xml.ontimeout = event =>
        {
            this.setState(
                {
                    isLoading: false,
                    serverDown: true
                }
            );
        }

        xml.open("GET", this.url, true)
        xml.timeout = 6000
        xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
        xml.send()
    }

    handleClick(event)
    {
        event.preventDefault()

        let xml = new XMLHttpRequest()

        let url = this.url + document.getElementById("select_id").value

        console.log(url)

        xml.onload = data =>
        {
            if (xml.status !== 204)
            {
                this.setState(
                    {
                        isLoading: false,
                        error: <h4>Il server ha restituito {xml.status}</h4>
                    }
                );
            }
            else
            {
                this.setState(
                    {
                        isLoading: false,
                        success: <h4>Valore eliminato correttamente!</h4>
                    }
                );
            }
        }

        xml.ontimeout = event =>
        {
            this.setState(
                {
                    isLoading: false,
                    serverDown: true
                }
            );
        }

        xml.open("DELETE", url, true)
        xml.timeout = 8000
        xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
        xml.send()
    }

    render()
    {
        if (this.state.isLoading)
        {
            return (
                <h4>Sto caricando i dati...</h4>
            );
        }
        else if (this.state.serverDown)
        {
            return (
                <ServerDownAlert />
            );
        }

        return (
            <PrintSelect error={this.state.error} success={this.state.success} ids={this.state.ids} onSubmit={event => this.handleClick(event)}/>
        );
    }
}

export default Delete;