import React from "react"
import Chart from "react-google-charts"

function HistoryChart(props)
{
    if (props.isLoading === true)
    {
        return (
            <h4>Sto caricando..</h4>
        );
    }

    return (
        <div>
            <Chart
                height="450px"
                chartType="LineChart"
                loader="Loading chart..."
                data={props.data}
                legendToggle
            />
        </div>
    );
}

export default HistoryChart;