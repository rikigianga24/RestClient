import React from "react";
import Chart from "react-google-charts";
import ServerDownAlert from "./functional/ServerDownAlert";
import { Container, Table } from "react-bootstrap";
import ValuesTable from "./functional/ValuesTable"

class Get extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.arrayDati = [];
    this.state = {
      isLoading: true
    }

    this.max = 0
    this.min = 100
  }

  getMax() 
  {
    return this.max
  }

  getMin() 
  {
    return this.min
  }

  getAverage() 
  {
    return this.arrayDati.reduce((a, b) => a + b, 0) / this.arrayDati.length
  }

  componentDidMount()
  {
    this.interval = setInterval(() => {
      let dato = 10 + Math.random() * 90;
      this.arrayDati.push(dato);

      if (dato > this.max)
      {
        this.max = dato
      }
      else if (dato < this.min)
      {
        this.min = dato
      }

      this.setState({
        isLoading: false,
        data: [
          ["Label", "Value"],
          ["°C", dato],
        ]
      })
    }, 1000)
  }

  componentWillUnmount()
  {
    clearInterval(this.interval)
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
      <Container fluid className="h-100">
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
          <ValuesTable max={this.getMax()} min={this.getMin()} average={this.getAverage()} />
          </div>
        </Container>
    );
  }
}

export default Get;