import React, { useState } from "react"
// import mqtt from "mqtt"
import Chart from "react-google-charts"

function ValueChart(props) {
    /*const [connection, setConnection] = useState(false)
    const [temp, setTemp] = useState([])

    const client = mqtt.connect("http://localhost:9001")
    client.on("connect", () => setConnection(true))
    client.subscribe("temperature")
    client.on("message", (topic, payload, packet) => {
        setTemp(parseFloat(payload.toString()))
    })*/

    return (
    <Chart
        height="450px"
        chartType="Gauge"
        loader="Loading chart..."
        data={props.data}
        options={{
            redFrom: 90,
            redTo: 100,
            yellowFrom: 75,
            yellowTo: 90,
            minorTicks: 5,
        }}
    />)
}

export default ValueChart