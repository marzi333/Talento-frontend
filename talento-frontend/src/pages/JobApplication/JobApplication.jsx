import { Rowing } from "@material-ui/icons";
import { Margin } from "@mui/icons-material";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// import { mkdir } from 'fs/promises';
import { postAndEvaluateFreelancer } from "../../services/api/jobApplication.services.js";

import {
  Box,
  Tabs,
  Typography,
  Tab,
  createTheme,
  Collapse,
  Alert,
  AlertTitle,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import JobApplicationTab from "components/jobApplication/JobApplicationTab";
import QuestionsTab from "components/jobApplication/QuestionsTab.jsx";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };

}
function JobApplication() {
  const [value, setValue] = React.useState(0);
  const [showApplicationSubmittedAlert, toggleApplicationSubmittedAlert] =
    React.useState(false);
  const [candidate, setCandidate] = useState({
    id: "",
    firstName: "Max",
    lastName: "Musterman",
    email: "musterm@mytum.de",
    phone: "01781111111",
    cvUrl: "",
  });
  const handleSaveCandidateInfo = (updatedInfo) => {
    setCandidate({
      ...candidate,
      id: "0",
      firstName: updatedInfo.firstName,
      lastName: updatedInfo.lastName,
      email: updatedInfo.email,
      phone: updatedInfo.phone,
    });
    setValue(1);
  };

  const handleUploadCV = (pdfFile) => {
    const storageRef = firebase.storage().ref();
    const pdfRef = storageRef.child(`pdfs/${pdfFile.name}`);

    pdfRef
      .put(pdfFile)
      .then((snapshot) => {
        console.log("PDF uploaded", snapshot);
        pdfRef
          .getDownloadURL()
          .then((url) => {
            setCandidate({ ...candidate, cvUrl: url });
          })
          .catch((error) => {
            console.log("Error getting download URL", error);
          });
      })
      .catch((error) => {
        console.log("Error uploading PDF", error);
      });
  };


  const submitApplication = () => {
    

    async function evaluateCandidate() {
      const res = await postAndEvaluateFreelancer(candidate.cvUrl);
      console.log("res",res);
    }
    evaluateCandidate();

    toggleApplicationSubmittedAlert(true);
    setValue(0);
  };

  return (
    <div>
      <Collapse in={showApplicationSubmittedAlert}>
        <Alert
          severity="warning"
          onClose={() => {
            toggleApplicationSubmittedAlert(false);
          }}
        >
          <AlertTitle>Application Submitted!</AlertTitle>
          Thank you for submitting your application. HR will get back to you as
          soon as possible.
        </Alert>
      </Collapse>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          aria-label="basic tabs example"
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab disabled={true} label="Job Application" {...a11yProps(0)} />
          <Tab disabled={true} label="General Questions" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <JobApplicationTab
          candidate={candidate}
          handleNext={handleSaveCandidateInfo}
          uploadFile={handleUploadCV}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <QuestionsTab handleNext={submitApplication} />
      </CustomTabPanel>
    </div>
  );
}

export default JobApplication;
