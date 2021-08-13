import React from "react";
import {Formik,Form} from "formik";

function FormikForm({initialValues, onSubmit, validationSchema, children}) {
  return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({errors,touched}) => <Form>{children}</Form>}
      </Formik>
  );
}

export default FormikForm;
