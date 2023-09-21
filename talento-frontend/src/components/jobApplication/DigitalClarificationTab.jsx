import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  TextField,
} from "@material-ui/core";
import { Button, Grid, Typography } from "@mui/material";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import React from "react";

function DigitalClarificationTab({ handleNext }) {
  const json = {
    "showQuestionNumbers": "off",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
         "type": "comment",
         "name": "suggestions-auto-grow",
         "title": "What would make you more satisfied with our product?",
         "description": "The comment area has an initial height of two rows and automatically expands or shrinks to accomodate the content.",
         "rows": 2,
         "autoGrow": true,
         "allowResize": false
       },
       {
         "type": "comment",
         "name": "suggestions-max-length",
         "title": "What would make you more satisfied with our product?",
         "description": "The comment area is resizable and limited to 500 characters.",
         "maxLength": 500
       }
      ]
     }
    ]
   };
  const survey = new Model(json);
  return (
    <Grid container direction="row">
      
      <Survey model={survey} />
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

export default DigitalClarificationTab;
