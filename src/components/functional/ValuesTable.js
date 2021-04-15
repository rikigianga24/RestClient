import React from "react"
import { Grid, Paper } from "@material-ui/core"

function ValuesTable(props) {
  return (
    <Grid container direction="column" className="h-100" alignItems="stretch" justify="center" spacing={3}>
      <Grid item>
        <Paper elevation={3} style={{ backgroundColor: props.bg, color: props.textColor }} className="p-4">
          <p>Max</p>
          <h4><strong>{props.max.toPrecision(4)}</strong></h4>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ backgroundColor: props.bg, color: props.textColor }} className="p-4">
          <p>Average</p>
          <h4><strong>{props.average.toPrecision(4)}</strong></h4>
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={3} style={{ backgroundColor: props.bg, color: props.textColor }} className="p-4">
          <p>Min</p>
          <h4><strong>{props.min.toPrecision(4)}</strong></h4>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ValuesTable;