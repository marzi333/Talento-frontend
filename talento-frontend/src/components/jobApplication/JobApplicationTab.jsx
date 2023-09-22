// @ts-ignore
import { VisuallyHiddenInput } from "@chakra-ui/visually-hidden";
import { CloudUpload, Rowing } from "@material-ui/icons";
// @ts-ignore
import { Margin } from "@mui/icons-material";
import {
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function JobApplicationTab({ candidate, handleNext, uploadFile }) {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    // @ts-ignore
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: candidate.firstName,
      lastName: candidate.lastName,
      email: candidate.email,
      phone: candidate.phone,
      cvPath: candidate.cvPath,
    },
  });

  const [file, setFile] = React.useState(null);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please select a PDF file");
      setFile(null);
    }
  };

  const handleSubmitUpdatedInfo = (formData) => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    handleNext(formData);
    uploadFile(file);
  };

  React.useEffect(() => {
    setValue("firstName", candidate.firstName);
    setValue("lastName", candidate.lastName);
    setValue("email", candidate.email);
    setValue("phone", candidate.phone);
  }, []);

  return (
    <Card style={{ padding: 20 }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={6}>
          <Typography
            variant="h3"
            color={"black"}
            textAlign={"left"}
            gutterBottom
          >
            Staff Software Engineer - Cloud Infrastructure
          </Typography>
        </Grid>{" "}
        <Grid item xs={6} />
        <Grid item xs={6}>
          <Typography
            variant="body1"
            color={"black"}
            textAlign={"left"}
            gutterBottom
          >
            We're Celonis, the global leader in execution management and process mining technology, and one of the 50 most valuable private companies in the world. We believe that every company can unlock its full execution capacity - and for that, we need you to join us.
          </Typography>
        </Grid>{" "}
        <Grid item xs={8} />
        <Divider />
        <Grid item xs={6}>
          <Typography
            variant="subtitle2"
            color={"black"}
            textAlign={"left"}
            gutterBottom
          >
            <strong>The Team:</strong>
          </Typography>
        </Grid>{" "}
        <Grid item xs={8} />
        <Grid item xs={6}>
          <Typography
            variant="body1"
            color={"black"}
            textAlign={"left"}
            gutterBottom
          >
            The Platform Infrastructure team builds and scales the cloud platform that Celonis runs on, across multiple Kubernetes clusters and multiple cloud providers. You’ll get to sharpen your skills on the latest tech stack in the areas of DevOps tooling, CICD, Containerization, orchestration, and cloud infrastructure as code.
          </Typography>
        </Grid>{" "}
        <Grid item xs={8} />
        <Grid item xs={6}>
          <Typography
            variant="subtitle2"
            color={"black"}
            textAlign={"left"}
            gutterBottom
          >
            <strong>The Role:</strong>
          </Typography>
        </Grid>{" "}
        <Grid item xs={8} />
        <Grid item xs={6}>
          <Typography
            variant="body1"
            color={"black"}
            textAlign={"left"}
            gutterBottom
          >
Responsible for building and operating a highly available Microservices Cloud platform based on Kubernetes          </Typography>
        </Grid>{" "}
        <Grid item xs={8} />
        <Grid item xs={6}>
          <Typography
            variant="subtitle2"
            color={"black"}
            textAlign={"left"}
            gutterBottom
          >
            <strong>The qualifications you need:</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <List sx={{ listStyleType: "disc", pl: 2 }}>
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                Bachelor or master’s degree in Computer Science, Computer Engineering, or equivalent practical experience
              </Typography>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
Experience developing/maintaining Cloud solutions in large Enterprise environments              </Typography>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                {" "}
                Experience with at least one of the following cloud providers: AWS, Azure, GCP              </Typography>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
Proficiency in Python, Go, or Java              </Typography>
            </ListItem>
          </List>
        </Grid>{" "}
        <Grid item xs={8} />
        <Grid item xs={6}>
          <Typography
            variant="subtitle2"
            color={"black"}
            textAlign={"left"}
            gutterBottom
          >
            <strong>What Celonis can offer you:</strong>
          </Typography>
        </Grid>{" "}
        <Grid item xs={8} />
        <Grid item xs={6}>
          <List sx={{ listStyleType: "disc", pl: 2 }}>
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
The unique opportunity to work within a new category of technology, Execution Management              </Typography>
            </ListItem>{" "}
          </List>
        </Grid>{" "}
        <Grid item xs={8} />
        <Grid item xs={6}>
          <Divider />
          <Grid container direction={"column"}>
            <Grid item>
              <TextField
                margin="dense"
                id="first-name"
                label="First Name"
                type="text"
                defaultValue={getValues("firstName")}
                fullWidth
                variant="standard"
                // @ts-ignore
                error={errors.firstName}
                helperText={errors.firstName?.message}
                {...register("firstName", {
                  required: "The first name is required",
                  maxLength: {
                    value: 16,
                    message: "Maximum 16 characters",
                  },
                })}
              />
            </Grid>

            <Grid item>
              <TextField
                margin="dense"
                id="last-name"
                label="Last Name"
                type="text"
                defaultValue={getValues("lastName")}
                fullWidth
                variant="standard"
                // @ts-ignore
                error={errors.lastName}
                helperText={errors.lastName?.message}
                {...register("lastName", {
                  required: "The last name is required",
                  maxLength: {
                    value: 16,
                    message: "Maximum 16 characters",
                  },
                })}
              />
            </Grid>

            <Grid item>
              <TextField
                margin="dense"
                id="email"
                label="email"
                type="text"
                defaultValue={getValues("email")}
                fullWidth
                variant="standard"
                // @ts-ignore
                error={errors.firstName}
                helperText={errors.firstName?.message}
                {...register("email", {
                  required: "The email name is required",
                  maxLength: {
                    value: 16,
                    message: "Maximum 16 characters",
                  },
                })}
              />
            </Grid>

            <Grid item>
              <TextField
                margin="dense"
                label="Phone Number"
                defaultValue={getValues("phone")}
                fullWidth
                variant="standard"
                // @ts-ignore
                error={errors.phone}
                helperText={errors.phone?.message}
                {...register("phone", {
                  pattern: {
                    value:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message:
                      "Please enter a valid phone number format eg. +491780000000",
                  },
                })}
              />
            </Grid>

            <Grid item>
              <Grid container direction={"row"}>
                <Typography variant="body1" textAlign={"left"}>
                  <strong>Resume/CV:</strong>
                  <br/>
                  <Button
                style={{background:"black"}}
                  component="label"
                  variant="contained"
                  startIcon={<CloudUpload />}
                >
                  Upload file
                  <VisuallyHiddenInput onChange={onFileChange} type="file" accept="application/pdf"/>
                </Button>
                </Typography>
                
                {/* <div>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={onFileChange}
                  />
                </div> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} />
        <Divider />
        <Grid item xs={12} alignSelf={"flex-end"}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#51FF3F", color: "black" }}
            onClick={handleSubmit((formData) =>
              handleSubmitUpdatedInfo(formData)
            )}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default JobApplicationTab;
