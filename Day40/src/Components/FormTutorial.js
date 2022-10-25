import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// before using yup
// const validate = (values) => {
//   const errors = {};

//   // checking first name
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.lenght > 15) {
//     errors.firstName = "Must be 15 characters or less";
//   }

//   // checking last name
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.lenght > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }

//   // checking email
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

function FormTutorial() {
  //   const formik = useFormik({
  //     initialValues: { email: " ", firstName: " ", lastName: " " },
  //     // validate, // before using yup
  //     validationSchema: yup.object({
  //       firstName: yup
  //         .string()
  //         .max(15, "Must be 15 charaters or less")
  //         .required("Required"),
  //       lastName: yup
  //         .string()
  //         .max(20, "Must be 20 charaters or less")
  //         .required("Required"),
  //       email: yup
  //         .string()
  //         .email("Invalid email address")
  //         .required("Required"),
  //     }),
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });
  return (
    <Formik
      initialValues={{ email: "", firstName: "", lastName: "" }}
      validationSchema={yup.object({
        firstName: yup
          .string()
          .max(15, "Must be less than 15 characters")
          .required("Required"),

        lastName: yup
          .string()
          .max(20, "Must be less than 20 characters")
          .required("Required"),

        email: yup
          .string()
          .email("invalid email address")
          .required("Required"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="email">Email: </label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <label htmlFor="firstName">First Name: </label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormTutorial;
