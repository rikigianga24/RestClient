import React from "react"
import HistoryChart from "./functional/HistoryChart"
import HistoryHeader from "./functional/HistoryHeader"
import { Container } from "react-bootstrap"

class History extends React.Component
{
    constructor (props)
    {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount ()
    {
        this.loadData()
    }

    loadData ()
    {
        let xml = new XMLHttpRequest()

        xml.onload = data => {
            
            let risultato = JSON.parse(xml.responseText);
            
            let array = []

            array.push([
                { type: "date", label: "time" },
                { type: "number", label: "aTemp" }
            ])

            if (!Array.isArray(risultato)) {
                risultato = [risultato];
            }

            for (let obj of risultato) {
                array.push(
                    [
                        new Date(obj["time"]), 
                        obj["aTemp"]
                    ]
                );
            }

            this.setState({
                isLoading: false,
                data: array
            })
        }

        xml.open("GET", "http://ee8ab2dfef19.ngrok.io/api/observation/get-by-day/2019-01-01", true)
        xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
        xml.send()
    }

    render ()
    {
        return (
            <Container fluid>
                <HistoryHeader />
                <HistoryChart
                    isLoading={this.state.isLoading}
                    data={this.state.data}
                />
            </Container>
        );
    }
}

export default History;