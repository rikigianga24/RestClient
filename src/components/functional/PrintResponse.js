import React from 'react'
import Chart from "react-google-charts";

function PrintResponse(props) {
    var risultato = null

    let xml = new XMLHttpRequest();

    xml.onload = data => {
        risultato = JSON.parse(xml.responseText)
    }

    xml.open("GET", props.url, false)
    xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
    xml.setRequestHeader("Accept", "application/json")
    xml.send(null)

    let array = [];

    array.push(
        [
          { type: 'date', label: 'time'},
          { type: "number", label: "aTemp" },
          { type: "number", label: "aHum" },
          { type: "number", label: "bTemp" },
          { type: "number", label: "bHum" },
          { type: "number", label: "extTemp" },
          { type: "number", label: "extHum" }
        ]
    );
    
    if (!Array.isArray(risultato))
    {
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
        );
    }

    return (
      <div className="mt-3 mb-2">
        <Chart 
          height = "450px"
          chartType = "LineChart"
          loader = "Loading chart..."
          data = { array }
        /> 
      </div>
    );
}

export default PrintResponse;