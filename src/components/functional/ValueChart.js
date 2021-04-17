import React from "react"
import Chart from "react-google-charts";

function ValueChart(props) {
    if (props.isLoading === true)
    {
        return <h5>Sto caricando i dati...</h5>
    }

    return (
        <Chart
            height="100%"
            chartType="LineChart"
            loader="Loading chart..."
            data={props.data}
            legendToggle
        />
    );
}

export default ValueChart;