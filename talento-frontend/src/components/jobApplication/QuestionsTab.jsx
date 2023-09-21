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

function QuestionsTab({ handleNext }) {
  const questions = [
      
              "The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.",
              "The comment area is resizable and limited to 500 characters.",
"Describe a time when you had to deal with a difficult coworker or team member. How did you handle the situation, and what was the outcome?",
"Can you share an example of a project where you faced tight deadlines and limited resources? How did you prioritize tasks and ensure successful completion?",
"Tell me about a situation in which you identified a problem or inefficiency in a process or workflow. What steps did you take to address it, and what were the results?",
"Have you ever encountered a challenging customer or client? How did you manage their concerns or complaints while maintaining a positive relationship?",
"Describe a situation where you had to lead a team through a major change or transition. How did you ensure buy-in from team members, and what strategies did you use to minimize resistance?",
"Can you recall a time when you had to make a difficult decision with limited information or under time pressure? How did you arrive at your decision, and what were the consequences?",
"Tell me about a project or task that required you to work collaboratively with colleagues from different departments or backgrounds. How did you ensure effective communication and teamwork?"        ];
 
  return (
    <Grid container direction="row">
      <List>
      {questions.map((elem, key)=>
      {
        return(
        <ListItem>
          <Grid container>
        <Grid item xs={6}>
        <Typography variant={"body2"} textAlign={"start"} gutterBottom>{key+1}. {elem}</Typography></Grid>
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
              sx={{ backgroundColor: "#AAFF00", color: "black" }}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#AAFF00", color: "black" }}
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
