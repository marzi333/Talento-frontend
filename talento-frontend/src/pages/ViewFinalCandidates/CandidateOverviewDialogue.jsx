import { Grid } from '@material-ui/core'
import React from 'react'

function CandidateOverviewDialogue() {
  return (
    <Grid container direction={'row'}>
        <Grid item xs={8}>
            {/* Main info */}
        </Grid>
        <Grid item xs={4}>
            {/* Seniority Level */}
        </Grid>
        <Grid item xs={12}>
            {/* Similarity Score bar */}
        </Grid>
        <Grid item xs={8}>

        </Grid><Grid item xs={4}/>
        
    </Grid>
  )
}

export default CandidateOverviewDialogue