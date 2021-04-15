import React from "react";
import Chart from "react-google-charts";
import ServerDownAlert from "./functional/ServerDownAlert";
import { Grid } from "@material-ui/core"
import ValuesTable from "./functional/ValuesTable"

class Get extends React.Component 
{
  constructor(props) 
  {
    super(props)

    this.arrayDati = []
    this.state = {
      isLoading: true
    }

    this.max = 0
    this.min = 0
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

  loadData ()
  {
    let dato = 10 + Math.random() * 90
      this.arrayDati.push(dato);

      if (dato > this.max)
      {
        this.max = dato
      }
      
      if (this.min === 0)
      {
        this.min = dato
      }
      else if(dato < this.min)
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
  }

  shouldComponentUpdate ()
  {
    return true
  }

  componentDidMount ()
  {
    this.interval = setInterval(() => 
    {
      this.loadData()
    }, 1000)
  }

  componentWillUnmount ()
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
      <Grid container className="h-100">
        <Grid item xs={4} lg={3}>
          <ValuesTable bg={this.props.darkMode.appBg} textColor={this.props.darkMode.textColor} average={this.getAverage()} min={this.getMin()} max={this.getMax()} />
        </Grid>
        <Grid item xs={8} lg={9}>
          <div className="d-flex justify-content-center">
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
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default Get;