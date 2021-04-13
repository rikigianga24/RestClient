import React from "react";
import Chart from "react-google-charts";
import ServerDownAlert from "./functional/ServerDownAlert";
import { Container, Table } from "react-bootstrap";

class Get extends React.Component {
  constructor(props) 
  {
    super(props);
    this.arrayDati = [];
    this.state = {
      isLoading: true,
  };

    setInterval(() => {
      let dato = 10 + Math.random() * 90;
      this.arrayDati.push(dato);
      
      /*
      let led = null

      if (dato <= 75)
      {
        led = <div class="led-green"></div>
      }
      else if (dato > 75 && dato <= 90)
      {
        led = <div class="led-yellow"></div>
      }
      else
      {
        led = <div class="led-red"></div>
      }
    */

      this.setState({
        isLoading: false,
        data: [
          ["Label", "Value"],
          ["°C", dato],
        ]
      });
    }, 1000);
  }

  getMax() 
  {
    return Math.max(...this.arrayDati);
  }

  getMin() 
  {
    return Math.min(...this.arrayDati);
  }

  getAverage() 
  {
    return this.arrayDati.reduce((a, b) => a + b, 0) / this.arrayDati.length;
  }

  render() 
  {
    if (this.state.isLoading) 
    {
      return <h4>Sto caricando i dati...</h4>;
    } 
    else if (this.state.serverDown) 
    {
      return <ServerDownAlert />;
    }

    return (
      <div className="container-fluid h-100">
        <div className="d-flex flex-column align-items-center">
          <Chart
            height="450px"
            chartType="Gauge"
            loader="Loading chart..."
            data={this.state.data}
            options={{
              redFrom: 90,
              redTo: 100,
              yellowFrom: 75,
              yellowTo: 90,
              minorTicks: 5,
            }}
            legendToggle
          />
          <Table bordered hover striped style={{ width: "300px" }}>
            <tbody>
              <tr className="text-center">
                <td>
                  <b>Max</b>
                </td>
                <td>{parseFloat(this.getMax()).toPrecision(5)}</td>
              </tr>
              <tr className="text-center">
                <td>
                  <b>Media</b>
                </td>
                <td>{parseFloat(this.getAverage()).toPrecision(5)}</td>
              </tr>
              <tr className="text-center">
                <td>
                  <b>Min</b>
                </td>
                <td>{parseFloat(this.getMin()).toPrecision(5)}</td>
              </tr>
            </tbody>
          </Table>
          </div>
      </div>
    );
  }
}

export default Get;
