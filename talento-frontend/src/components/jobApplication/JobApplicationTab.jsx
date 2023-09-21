// @ts-ignore
import { Rowing } from "@material-ui/icons";
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
        alert('Please select a file first');
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
            Java Staff Software Engineer - Distributed Systems
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
            We're Celonis, the global leader in execution management and process
            mining technology, and one of the 50 most valuable private companies
            in the world. We believe that every company can unlock its full
            execution capacity - and for that, we need you to join us.
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
            You will be part of the Core Mining Engine team. The Core Mining
            Engine enables our customers to interactively process mine
            enterprise sized data sets. To achieve that goal we developed our
            own analytical database. In order to handle the strong growth of our
            customer base and their demands we heavily invest on the scalability
            of the Core Mining Engine.
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
            As a member of the Core Mining Engine team you will work on our
            analytical database which is built on a microservice architecture,
            optimized to process large amounts of data. You will address scaling
            problems, increasing robustness while maintaining cost efficiency
            and integrating the Core Mining Engine with new technologies like
            Apache Kafka.{" "}
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
            <strong>The work you’ll do:</strong>
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
                Implementing features in existing or newly created microservices
              </Typography>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                Take ownership of features from design to operation{" "}
              </Typography>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                {" "}
                Collaborate with various teams and coworkers to cope with
                rapidly increasing system workload
              </Typography>
            </ListItem>

            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                Identify and eliminate bottlenecks in our current system
              </Typography>
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
            <strong>The qualification you need:</strong>
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
                You have experience with writing scalable, reliable, and
                testable software
              </Typography>
            </ListItem>{" "}
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                You are fluent in Java. Python or C++ are a plus
              </Typography>
            </ListItem>{" "}
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                You have experience with developing data-intensive and
                performance-critical systems
              </Typography>
            </ListItem>{" "}
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                You know how to analyze complex systems
              </Typography>
            </ListItem>{" "}
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                You have solid knowledge of data structures / algorithms
              </Typography>
            </ListItem>{" "}
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                You have solid knowledge about asynchronous / concurrent
                programming and have worked with the low-level building blocks
                of synchronization like semaphores, read-write locks, mutexes
                etc.
              </Typography>
            </ListItem>{" "}
            <ListItem sx={{ display: "list-item" }}>
              <Typography
                variant="body1"
                color={"black"}
                textAlign={"left"}
                gutterBottom
              >
                You made first experiences with Spring
              </Typography>
            </ListItem>
          </List>
        </Grid>{" "}
        <Grid item xs={8} />
        <Grid item xs={6}>
          <Divider />
          <Grid container direction={"column"}>
            <Grid item>
              <TextField
                autoFocus
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
                autoFocus
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
                autoFocus
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
                autoFocus
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
                </Typography>
                <div>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={onFileChange}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} />
        <Divider />
        <Grid item xs={12} alignSelf={"flex-end"}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#AAFF00", color: "black" }}
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
