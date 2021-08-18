import React,{ useState} from "react";
import Webcam from "react-webcam";
import { Card, CardContent, MenuItem } from "@material-ui/core";
import { Formik, Form, Field, FormikConfig, FormikValues } from "formik";
import { TextField, Select } from "formik-material-ui";
import "../../css/BookedCheckIn.css";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {DropzoneArea} from 'material-ui-dropzone'
import * as Yup from 'yup'

const validate = Yup.object().shape({
  firstName: Yup.string()
  .min(3, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  lastName: Yup.string(),
  phone: Yup.string().min(10,'Enter a valid number').max(10).required('Required'),
  address: Yup.string().min(6,'Enter a valid address').max(50,'Too Long!').required('Required'),
  adhaar: Yup.string().min(12,'Enter a valid Adhaar number').required('Required'),

})

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));



function BookedCheckIn() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

const [saveDocument,setSaveDocument] = useState([]); // Save uploaded Document


  console.log(saveDocument);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const primaryDetails = {
    firstName: "Vishnu",
    lastName: "Satheesh",
    phone: "8137833845",
    roomType: "Double",
    guestNumber: "2",
    roomNumber: "",
    address: "",
    adhaar:''
  };

  return (
    <Card className="card">
      <CardContent className="card-contents">
        <Formik initialValues={primaryDetails} onSubmit={() => {}} validationSchema={validate}>
          <Form>
            <div className={classes.root}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
}

export default BookedCheckIn;


function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div className="first-form">
          <div className="first-row">
            <Field
              name="firstName"
              component={TextField}
              label="First Name"
              className="fields"
            />
            <Field
              name="lastName"
              component={TextField}
              label="Last Name"
              className="fields"
            />
          </div>
          <div className="second-row">
            <Field
              name="address"
              component={TextField}
              label="Address"
              className="fields"
            />
            <Field
              name="phone"
              component={TextField}
              label="Phone"
              className="fields"
            />
          </div>
          <div className="third-row">
          <Field
              name="adhaar"
              component={TextField}
              label="Adhaar Number"
              className="fields"
            />
          </div>
        </div>
      );
    case 1:
      return (
        <div className="second-form">
          <div className="first-row">
            <Field
              name="roomType"
              component={Select}
              label="Room Type"
              className="fields"
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Double">Double</MenuItem>
              <MenuItem value="Triple">Triple</MenuItem>
              <MenuItem value="Quad">Quad</MenuItem>
              <MenuItem value="Queen">Queen</MenuItem>
              <MenuItem value="King">King</MenuItem>
              <MenuItem value="Twin">Twin</MenuItem>
            </Field>
            <Field
              name="roomNumber"
              component={TextField}
              label="Room Number"
              className="fields n-bottom"
            />
          </div>
          <div className="second-row">
            <Field
              name="nights"
              component={TextField}
              label="Nights"
              className="fields"
            />
            <Field
              name="guestNumber"
              component={TextField}
              label="Guest Number"
              className="fields"
            />
          </div>
        </div>
      );
    case 2:
      return (
      <div className="third-form">
        <div className="first-row">
          <h3 className="dropzone-heading">Upload Adhaar card</h3>
          <DropzoneArea 
          // onSave={setSaveDocument}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    showPreviews={true}
                    maxFileSize={60000000} />
        </div>
        <div className="second-row space-right">
        <h3 className="camera-heading">Take a Snap</h3>
          <Camera />
        </div>
      </div>
      );
    default:
      return "Unknown stepIndex";
  }
}

function getSteps() {
  return ["Personal Informations", "Room Details", "Verifications"];
}

const Camera = () => {
    const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );

  return (
      <>
    <Webcam
    audio={false}
    ref={webcamRef}
    height={720}
    screenshotFormat="image/jpeg"
    width={620}
  />
  <button className="camera-button" onClick={capture}>Capture photo</button>
  </>
  )
}