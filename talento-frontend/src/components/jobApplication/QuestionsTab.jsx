import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  ListItem,
  TextField,
} from "@material-ui/core";
import { Button, Grid, List, Typography } from "@mui/material";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import React from "react";
import { themeJson } from "./styles";
import answers from "../../assets/answers.jsx";

function QuestionsTab({ handleNext }) {
  
  return (
    <Grid container direction="row">
      <List>
      {answers.map((elem, key)=>
      {
        return(
        <ListItem>
          <Grid container>
        <Grid item xs={6}>
        <Typography variant={"body2"} textAlign={"start"} gutterBottom>{key+1}. {elem.Q}</Typography></Grid>
        <Grid item xs={6}/>
        <br></br>
        
        <Grid item xs={6}>
          <TextField multiline
          fullWidth
          maxRows={8}
          variant="filled"/>
        </Grid><Grid item xs={6}/>
        </Grid>
        
        </ListItem>);
        
      })}
      </List>
      <Divider />
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#51FF3F", color: "black" }}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#51FF3F", color: "black" }}
              onClick={handleNext}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default QuestionsTab;
