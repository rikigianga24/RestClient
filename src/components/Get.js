import React from "react";
import Chart from "react-google-charts";
import ServerDownAlert from "./functional/ServerDownAlert";
import { Grid, Paper } from "@material-ui/core"

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

  componentDidMount ()
  {
    this.interval = setInterval(() => 
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
      <Grid container spacing="5" className="h-100">
        <Grid item xs={4}>
          <Grid container direction="column" className="h-100" alignItems="stretch" justify="center" spacing="3">
            <Grid item>
              <Paper elevation={3} style={{backgroundColor: '#121212'}}>
                <h4>Max</h4>
                {this.getMax().toPrecision(5)}
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3} style={{backgroundColor: '#121212'}}>
                <h4>Average</h4>
                {this.getAverage().toPrecision(5)}
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3} style={{backgroundColor: '#121212'}}>
                <h4>Min</h4>
                {this.getMin().toPrecision(5)}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
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
        </Grid>
      </Grid>
    );
  }
}

export default Get;