import React, {useState, useEffect} from "react";
import Webcam from "react-webcam";
import {Card, CardContent, MenuItem, InputLabel, FormHelperText} from "@material-ui/core";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  FormikConfig,
  FormikValues,
  useFormikContext,
  getIn,
} from "formik";
import {TextField, Select} from "formik-material-ui";
import MUISelect from "@material-ui/core/Select";
import MUITextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import "../../css/BookedCheckIn.css";
import {makeStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {DropzoneArea} from "material-ui-dropzone";
import * as Yup from "yup";
import {getBookingDetails} from "../../api/renter";
import PropertyInputBox from "./../common/PropertyInputBox";
import PropertySelectBox from "./../common/PropertySelectBox";
import _ from "lodash";

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
month = month.toString();
if (month.length == 1) {
  month = "0" + month;
}

let newdate = year + "/" + month + "/" + day;

const validate = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  phoneNumber: Yup.string().min(5).max(50).required(),
  address: Yup.string().min(8, "Too short").max(255, "Too Long!").required("Required"),
  adhaar: Yup.string().min(12, "Enter a valid Adhaar number").required("Required"),
  email: Yup.string().required("Email is required").email("Email must be valid").label("Email"),
  startingDayOfStay: Yup.string()
    .matches(
      /^(((\d{4}\/((0[13578]\/|1[02]\/)(0[1-9]|[12]\d|3[01])|(0[13456789]\/|1[012]\/)(0[1-9]|[12]\d|30)|02\/(0[1-9]|1\d|2[0-8])))|((([02468][048]|[13579][26])00|\d{2}([13579][26]|0[48]|[2468][048])))\/02\/29)){0,10}$/,
      "Invalid date"
    )
    .test({
      name: "arrival",
      test: value => (value < newdate ? false : true),
      message: "Invalid Date",
    })
    .required(),

  endingDayOfStay: Yup.string()
    .matches(
      /^(((\d{4}\/((0[13578]\/|1[02]\/)(0[1-9]|[12]\d|3[01])|(0[13456789]\/|1[012]\/)(0[1-9]|[12]\d|30)|02\/(0[1-9]|1\d|2[0-8])))|((([02468][048]|[13579][26])00|\d{2}([13579][26]|0[48]|[2468][048])))\/02\/29)){0,10}$/,
      "Invalid date"
    )
    .test({
      name: "departure",
      test: value => (value < newdate ? false : true),
      message: "Invalid Date",
    })
    .required(),
});

const useStyles = makeStyles(theme => ({
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

function BookedCheckIn({match}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  let formikContext = useFormikContext();

  const [saveDocument, setSaveDocument] = useState([]); // Save uploaded Document
  const [initialValues, setInitialValues] = useState();

  console.log(saveDocument);
  console.log();
  const getDetails = async () => {
    const {data} = await getBookingDetails(match.params.bookingId);
    data.startingDayOfStay = data.startingDayOfStay.replaceAll("-", "/");
    data.endingDayOfStay = data.endingDayOfStay.replaceAll("-", "/");
    setInitialValues(data);
    console.log(data, "dt");
  };

  useEffect(() => {
    getDetails();
  }, []);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = async values => {
    console.log(values, "vls");
  };

  const primaryDetails = {
    firstName: "Vishnu",
    lastName: "Satheesh",
    phone: "8137833845",
    roomType: "Double Room",
    guestNumber: "2",
    roomNumber: "Room No- 101",
    extraBed: "No extra bed",
    address: "",
    adhaar: "",
  };

  const Input = ({field, form: {errors}}) => {
    const errorMessage = getIn(errors, field.name);

    return (
      <>
        <MUITextField {...field} />
        {errorMessage && <div style={{color: "red"}}>{errorMessage}</div>}
      </>
    );
  };

  // const Select = ({field, form: {errors}}) => {
  //   const errorMessage = getIn(errors, field.name);

  //   return (
  //     <>
  //       <MUI.Select {...field} />
  //       {errorMessage && <div style={{color: "red"}}>{errorMessage}</div>}
  //     </>
  //   );
  // };

  if (!initialValues) return null;

  return (
    <Card className="card" style={{margin: "auto", width: "85%", marginTop: "75px"}}>
      <CardContent className="card-contents">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
          validationSchema={validate}
        >
          {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
          <Form>
            <div className={classes.root}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>All steps completed</Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(
                        activeStep,
                        initialValues,
                        Input,
                        Select,
                        classes,
                        handleChange
                      )}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      {activeStep === steps.length - 1 ? null : (
                        <Button variant="contained" color="primary" onClick={handleNext}>
                          Next
                        </Button>
                      )}
                      {activeStep === steps.length - 1 ? (
                        <button className="btn btn-primary" type="submit">
                          Submit
                        </button>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Form>)}
        </Formik>
      </CardContent>
    </Card>
  );
}

export default BookedCheckIn;

function getStepContent(stepIndex, initialValues, Input, Select, classes, handleChange) {

  switch (stepIndex) {
    case 0:
      return (
        <div className="first-form">
          <div className="first-row">
            <Field name="name" component={TextField} label="Full Name" className="fields" />
            <Field name="phoneNumber" component={TextField} label="Phone" className="fields" />
          </div>
          <div className="second-row w-3/6">
            <Field
              fullWidth
              name="address"
              component={TextField}
              label="Address"
              className="fields"
            />
          </div>
          <div className="third-row">
            <Field name="adhaar" component={TextField} label="Adhaar Number" className="fields" />
            <Field name="email" component={TextField} label="Email ID" className="fields" />
          </div>
          <div className="fourth-row w-3/6">
            <Field
              fullWidth
              name="startingDayOfStay"
              component={TextField}
              label="Arrival Date (YYYY/MM/DD)"
              className="fields"
            />
          </div>
          <div className="fifth-row w-3/6">
            <Field
              fullWidth
              name="endingDayOfStay"
              component={TextField}
              label="Departure Date (YYYY/MM/DD)"
              className="fields"
            />
          </div>
        </div>
      );
    case 1:
      return (
        <div style={{margin: "auto", width: "75%"}}>
          {/* {Object.entries(initialValues.roomFinalDetails).map(([key, value]) => ( */}
          <FieldArray name="roomFinalDetails">
            {({push, remove}) => (
              <div>
                {initialValues.roomFinalDetails.map((p, index) => {
                  console.log(p,"bb")
                  return (
                    <div
                      key={p.roomId + index}
                      style={{
                        marginBottom: "30px",
                        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        padding: "30px",
                        borderRadius: "10px",
                      }}
                    >
                      {/* <div className="grid grid-cols-6 gap-6"> */}
                      {/* <Field name={`roomFinalDetails[${index}].roomType`} component={Input} /> */}
                      {/* {p.availableRoomNumbers.map((pet, i) => {
                          return (
                            <div key={pet.id}> */}
                      <MUISelect
                        name={`roomFinalDetails[${index}].roomType`}
                        defaultValue={p.roomType}
                        onChange={handleChange}
                        disabled
                        >
                        <MenuItem value={p.roomType}>{p.roomType}</MenuItem>
                      </MUISelect>
                      <MUISelect
                        name={`roomFinalDetails[${index}].roomNumber`}
                        defaultValue={p.roomNumber}
                        onChange={handleChange}
                        >
                        {p.availableRoomNumbers.map((no, ind) => (
                          <MenuItem value={no} key={ind.toString()}>
                            {no}
                          </MenuItem>
                        ))}
                      </MUISelect>
                      {/* </div>
                          );
                        })} */}
                      {/* <Field
                          name={`roomFinalDetails[${index}].roomNumber`}
                          as={Select}
                          label="Room Type"
                          className="fields"
                        >
                          <MenuItem value="12">12</MenuItem>
                          <MenuItem value="Double">Double</MenuItem>
                          <MenuItem value="Triple">Triple</MenuItem>
                          <MenuItem value="Quad">Quad</MenuItem>
                          <MenuItem value="Queen">Queen</MenuItem>
                          <MenuItem value="King">King</MenuItem>
                          <MenuItem value="Twin">Twin</MenuItem>
                        </Field> */}
                      {/* <div className="col-span-6 sm:col-span-3">
                          <PropertySelectBox
                            label="Room Type"
                            name={`roomFinalDetails[${index}].roomType`}
                            disabled={true}
                            options={[p.roomType]}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <PropertySelectBox
                            label="Room Number"
                            name={`roomFinalDetails[${index}].roomNumber`}
                            options={_.flattenDeep([
                              null,
                              p.availableRoomNumbers.map(roomNo => roomNo),
                            ])}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <PropertyInputBox
                            label="Adults"
                            type="text"
                            name={`roomFinalDetails[${index}].adults`}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <PropertyInputBox
                            label="Children"
                            type="text"
                            name={`roomFinalDetails[${index}].children`}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <PropertySelectBox
                            label="Extra Bed"
                            name={`roomFinalDetails[${index}].extraBed`}
                            options={_.range(p.noOfExtraBeds + 1).map(opt => opt)}
                          />
                        </div> */}
                      <div className="col-span-6 sm:col-span-3">
                        <p style={{marginTop: "30px"}}>{p.pricePerExtraBed} Rs per Extra Bed</p>
                      </div>
                    </div>
                    // </div>
                  );
                })}
              </div>
            )}
          </FieldArray>
          {/* ))} */}
        </div>
      );
    case 2:
      return (
        <div className="third-form">
          <div className="first-row">
            <h3 className="dropzone-heading">Upload Adhaar card</h3>
            <DropzoneArea
              // onSave={setSaveDocument}
              acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
              showPreviews={true}
              maxFileSize={60000000}
            />
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

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return null;

  // return (
  //   <>
  //     <Webcam
  //       audio={false}
  //       ref={webcamRef}
  //       height={720}
  //       screenshotFormat="image/jpeg"
  //       width={620}
  //     />
  //     <button className="camera-button" onClick={capture}>
  //       Capture photo
  //     </button>
  //   </>
  // );
};
