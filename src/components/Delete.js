import React from 'react';
import PrintSelect from './functional/PrintSelect';

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

            for (let ris in risultato)
            {
                ids.push(ris.id)
            }

            this.setState(
                {
                    isLoading: false,
                    ids: ids
                }
            );
        }

        xml.open("GET", this.url, true)
        xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
        xml.send()
    }

    render()
    {
        if (this.state.isLoading)
        {
            return (
                <h3>Sto caricando i dati...</h3>
            );
        }

        return (
            <PrintSelect ids={this.state.ids}/>
        );
    }
}

export default Delete;