import React from "react"
import { Grid, Paper } from "@material-ui/core"

function ValuesTable(props) {
  return (
    <Grid container className="h-100" justify="center" spacing={3}>
      <Grid item xs={4} sm={12}>
        <Paper elevation={3} style={{ backgroundColor: props.bg, color: props.textColor }} className="p-4">
          <p>Max</p>
          <h4><strong>{props.max.toPrecision(4)}</strong></h4>
        </Paper>
      </Grid>
      <Grid item xs={4} sm={12}>
        <Paper elevation={3} style={{ backgroundColor: props.bg, color: props.textColor }} className="p-4">
          <p>Average</p>
          <h4><strong>{props.average.toPrecision(4)}</strong></h4>
        </Paper>
      </Grid>
      <Grid item xs={4} sm={12}>
        <Paper elevation={3} style={{ backgroundColor: props.bg, color: props.textColor }} className="p-4">
          <p>Min</p>
          <h4><strong>{props.min.toPrecision(4)}</strong></h4>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ValuesTable;