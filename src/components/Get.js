import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Chart from "react-google-charts";
import ServerDownAlert from "./functional/ServerDownAlert"
import Request from "../classes/Request"

class Get extends React.Component {
    constructor(props) {
        super(props)

        this.arrayAhum = []
        this.arrayBtemp = []
        this.arrayBhum = []
        this.arrayExtTemp = []
        this.arrayExtHum = []

        this.state =
        {
            isLoading: true
        }

        this.getRequest()
    }

    averageAtemp() {
        let req = new Request()
        return parseFloat(req.avgOnYear("2019", "aTemp")[0].avg_aTemp)
    }

    averageAhum() {
        let req = new Request()
        return parseFloat(req.avgOnYear("2019", "aHum")[0].avg_aHum)
    }

    averageBtemp() {
        let req = new Request()
        return parseFloat(req.avgOnYear("2019", "bTemp")[0].avg_bTemp)
    }

    averageBhum() {
        let req = new Request()
        return parseFloat(req.avgOnYear("2019", "bHum")[0].avg_bHum)
    }

    averageExtTemp() {
        let req = new Request()
        return parseFloat(req.avgOnYear("2019", "extTemp")[0].avg_extTemp)
    }

    averageExtHum() {
        let req = new Request()
        return parseFloat(req.avgOnYear("2019", "extHum")[0].avg_extHum)
    }

    getRequest() {

        let xml = new XMLHttpRequest();

        xml.onload = data => {
            let risultato = JSON.parse(xml.responseText)
            let array = [];

            array.push(
                [
                    { type: 'date', label: 'time' },
                    { type: "number", label: "aTemp" },
                    { type: "number", label: "aHum" },
                    { type: "number", label: "bTemp" },
                    { type: "number", label: "bHum" },
                    { type: "number", label: "extTemp" },
                    { type: "number", label: "extHum" }
                ]
            )

            if (!Array.isArray(risultato)) {
                risultato = [risultato]
            }

            for (let obj of risultato) {
                array.push(
                    [
                        new Date(obj["time"]),
                        obj["aTemp"],
                        obj["aHum"],
                        obj["bTemp"],
                        obj["bHum"],
                        obj["extTemp"],
                        obj["extHum"]
                    ]
                )
            }

            this.setState(
                {
                    isLoading: false,
                    data: array
                }
            )
        }

        xml.ontimeout = event => {
            this.setState(
                {
                    isLoading: false,
                    serverDown: true
                }
            )
        }

        xml.open("GET", 'http://ee8ab2dfef19.ngrok.io/api/observation/', true)
        xml.timeout = 16000
        xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
        xml.send(null)
    }

    render() {
        if (this.state.isLoading) {
            return (
                <h4>Sto caricando i dati...</h4>
            );
        }
        else if (this.state.serverDown) {
            return (
                <ServerDownAlert />
            );
        }

        return (
            <div className="mt-3">
                <Row>
                    <Col xs={12} md={3}>
                        <Row className="h-100 flex-column align-items-center" style={{color: this.props.darkMode.textColor}}>
                            <Col className="shadow mb-2" style={{ backgroundColor: this.props.darkMode.paperBg }}>
                                <p>Media aTemp</p>
                                <h4>{this.averageAtemp().toPrecision(4)}</h4>
                            </Col>
                            <Col className="p-2 shadow mb-2" style={{ backgroundColor: this.props.darkMode.paperBg }}>
                                <p>Media aHum</p>
                                <h4>{this.averageAhum().toPrecision(4)}</h4>
                            </Col>
                            <Col className="p-2 shadow mb-2" style={{ backgroundColor: this.props.darkMode.paperBg }}>
                                <p>Media bTemp</p>
                                <h4>{this.averageBtemp().toPrecision(4)}</h4>
                            </Col>
                            <Col className="p-2 shadow mb-2" style={{ backgroundColor: this.props.darkMode.paperBg }}>
                                <p>Media bHum</p>
                                <h4>{this.averageBhum().toPrecision(4)}</h4>
                            </Col>
                            <Col className="p-2 shadow mb-2" style={{ backgroundColor: this.props.darkMode.paperBg }}>
                                <p>Media extTemp</p>
                                <h4>{this.averageExtTemp().toPrecision(4)}</h4>
                            </Col>
                            <Col className="p-2 shadow mb-2" style={{ backgroundColor: this.props.darkMode.paperBg }}>
                                <p>Media extHum</p>
                                <h4>{this.averageExtHum().toPrecision(4)}</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={9}>
                        <Chart
                            height="450px"
                            chartType="LineChart"
                            loader="Loading chart..."
                            data={this.state.data}
                            legendToggle
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Get;
