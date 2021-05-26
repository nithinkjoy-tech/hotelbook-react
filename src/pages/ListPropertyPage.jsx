import React, {useState} from "react";
import Step1 from "./../components/listPropertyPageComponent/Step1";
import Step2 from "./../components/listPropertyPageComponent/Step2";
import Stepper from "react-stepper-horizontal";
import {Formik,Form} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  hotelName: Yup.string().min(1).max(50).required(),
//   starRating: Yup.string().oneOf(["1", "2", "3", "4", "5"]),
  contactName: Yup.string().required().min(2).max(50),
  phoneNumber: Yup.string()
    .required()
    .length(10)
    .matches(/^[0-9]+$/, "Mobile number must include only numbers"),
//   address: Yup.string().required().min(8).max(255),
//   city: Yup.string().required().min(1).max(50),
//   placeForSearch: Yup.string().required().min(1).max(50),
//   postalCode: Yup.string()
//     .required()
//     .length(6)
//     .matches(/^[0-9]+$/, "Postal code must include only numbers"),
//   parking: Yup.string().required().oneOf(["No", "Yes, Free", "Yes, Paid"]),
//   breakfast: Yup.string().required().oneOf(["No", "Yes, Free", "Yes, Paid"]),
//   facilities: Yup.array().required().min(1),
//   extraBed: Yup.boolean().required(),
//   extraBedDetails: Yup.array().nullable(),
//   mainPhoto: Yup.string().required(),
//   photos: Yup.array().nullable(),
//   freeCancellationAvailable: Yup.boolean().required(),
//   ifNotCancelledBeforeDate: Yup.string(),
//   checkIn: Yup.string().required(),
//   checkOut: Yup.string().required(),
//   accomodateChildren: Yup.boolean().required(),
//   allowPets: Yup.boolean().required(),
//   isPrepaymentRequired: Yup.boolean().required(),
//   provideDormitoryForDriver: Yup.boolean().required(),
//   GST: Yup.boolean(),
//   tradeName: Yup.string(),
//   GSTIN: Yup.string(),
//   panCardNumber: Yup.string(),
//   state: Yup.string(),
});

function ListPropertyPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const sections = [
    {title: "Basic Details", onClick: () => setCurrentPage(1)},
    {title: "Employment Details", onClick: () => setCurrentPage(2)}
    // { title: 'Review', onClick: () => setCurrentPage(4) },
    // { title: 'Review', onClick: () => setCurrentPage(5) },
    // { title: 'Review', onClick: () => setCurrentPage(6) },
  ];

  const handleSubmit = (values,{setFieldError}) => {
      console.log(values,"val")
  };

  const previousButtonStyle = {
    width: "120px",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "34vw",
  };
  const nextButtonStyle = {
    width: "120px",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "34vw",
  };

  const firstNextButtonStyle={...previousButtonStyle};
  firstNextButtonStyle.marginLeft="57.1vw"

  console.log(firstNextButtonStyle)

  const next = () => setCurrentPage(prev => prev + 1);
  const prev = () => setCurrentPage(prev => prev - 1);

  return (
    <Formik
      initialValues={{
        hotelName: "",
        // starRating: "",
        contactName: "",
        phoneNumber: "",
        // address: "",
        // city: "",
        // placeForSearch: "",
        // postalCode: "",
        // parking: "",
        // breakfast: "",
        // facilities: "",
        // extraBed: "",
        // extraBedDetails: "",
        // mainPhoto: "",
        // photos: "",
        // freeCancellationAvailable: "",
        // ifNotCancelledBeforeDate: "",
        // checkIn: "",
        // checkOut: "",
        // accomodateChildren: "",
        // allowPets: "",
        // isPrepaymentRequired: "",
        // provideDormitoryForDriver: "",
        // GST: "",
        // tradeName: "",
        // GSTIN: "",
        // panCardNumber: "",
        // state: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, {setFieldError}) => handleSubmit(values, setFieldError)}
    >
        {() => (
      <div>
        <Form>
        <h1>Dynamic Form Fields in React</h1>
        <Stepper
          steps={sections}
          activeStep={currentPage-1}
          activeColor="green"
          defaultBarColor="green"
          completeColor="red"
          completeBarColor="red"
        />

        {currentPage === 1 && (
          <>
            <Step1 />
            <button style={firstNextButtonStyle} className="btn btn-primary" onClick={next}>
              Next
            </button>
          </>
        )}

        {currentPage === 2 && (
          <>
            <Step2 />
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <button style={previousButtonStyle} className="btn btn-secondary" onClick={prev}>
                Back
              </button>
              <button style={nextButtonStyle} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </>
        )}
        {/* {currentPage === 3 && (
          <>
            <Step2 />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={previousButtonStyle} className="btn btn-secondary" onClick={prev}>Back</button>
              <button style={nextButtonStyle} className="btn btn-primary" onClick={next}>Next</button> 
            </div>
          </>
        )}
        {currentPage === 4 && (
          <>
            <Step2 />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={previousButtonStyle} className="btn btn-secondary" onClick={prev}>Back</button>
              <button style={nextButtonStyle} className="btn btn-primary" onClick={next}>Next</button> 
            </div>
          </>
        )}
        {currentPage === 5 && (
          <>
            <Step2 />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button style={previousButtonStyle} className="btn btn-secondary" onClick={prev}>Back</button>
              <button style={nextButtonStyle} className="btn btn-primary" onClick={next}>Next</button> 
            </div>
          </>
        )}

        {currentPage === 6 && (
          <>
            <div style={{ display: 'flex',justifyContent: 'space-between' }}>
              <button style={previousButtonStyle} className="btn btn-secondary" onClick={prev}>Back</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </>
        )} */}
        </Form>
      </div>
        )}
    </Formik>
  );
}

export default ListPropertyPage;
