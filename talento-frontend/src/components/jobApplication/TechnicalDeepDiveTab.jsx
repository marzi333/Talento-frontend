import { Button, Grid } from "@mui/material";
import React from "react";

function TechnicalDeepDiveTab({handleSubmit}) {
  return (
    <Grid container direction="column">
      <Grid item>chat</Grid>
      <Grid item>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#AAFF00", color: "black" }}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#AAFF00", color: "black" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TechnicalDeepDiveTab