import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Username must be at least 5 characters')
      .required('Username is required'),
    firstname: Yup.string().required('First name is required'),
    surname: Yup.string().required('Surname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    country: Yup.string().required('Country is required'),
    mobilenumber: Yup.string().required('Mobile number is required'),
    landlinenumber: Yup.string(),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    agreeToTerms: Yup.bool().oneOf([true], 'You must agree to the terms and conditions'),
  });

  // Initial form values
  const initialValues = {
    username: '',
    firstname: '',
    surname: '',
    email: '',
    country: '',
    mobilenumber: '',
    landlinenumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  };

  // Handle form submission
  const onSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="firstname">First Name</label>
            <Field type="text" id="firstname" name="firstname" />
            <ErrorMessage name="firstname" component="div" />
          </div>

          <div>
            <label htmlFor="surname">Surname</label>
            <Field type="text" id="surname" name="surname" />
            <ErrorMessage name="surname" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <Field as="select" id="country" name="country">
              <option value="" disabled>Select Country</option>
             <option value="pakistan">Pakistan</option>
            </Field>
            <ErrorMessage name="country" component="div" />
          </div>

          <div>
            <label htmlFor="mobilenumber">Mobile Number</label>
            <Field type="text" id="mobilenumber" name="mobilenumber" />
            <ErrorMessage name="mobilenumber" component="div" />
          </div>

          <div>
            <label htmlFor="landlinenumber">Landline Number</label>
            <Field type="text" id="landlinenumber" name="landlinenumber" />
            <ErrorMessage name="landlinenumber" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>

          <div>
            <label>
              <Field type="checkbox" name="agreeToTerms" />
              I agree to the terms and conditions
            </label>
            <ErrorMessage name="agreeToTerms" component="div" />
          </div>

          <div>
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage, Dropdown } from "formik";
// import * as Yup from "yup";
// import Select from "react-select";
// import { Link } from "react-router-dom";

// export default function DiscoverMore() {
//   // const [values, setFieldValue] = useState("");

//   const countryOptions = [
//     { value: "usa", label: "United States" },
//     { value: "canada", label: "Canada" },
//     { value: "australia", label: "Australia" },
//     { value: "uk", label: "United Kingdom" },
//   ];
//   const handleSubmit = (values) => {
//     console.log(values);
//   };
//   return (
//     <Formik
//       initialValues={{
//         username: "",
//         firstName: "",
//         surname: "",
//         mobileNumber: "",
//         landline: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         country: "",
//         agreeToTerms: false,
//         extension: "",
//       }}
//       onSubmit={(values) => {
//         console.log("values:::", values);
//         handleSubmit(values);
//       }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = "Email is Required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
//         if (!values.username) {
//           errors.username = "Username is Required";
//         }
//         return errors;
//       }}
//     >
//       {({
//         values,
//         setFieldValue,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//       }) => (
//         <Form>
//           <div>
//             {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
//             <label htmlFor="username" className="mb-2 mt-3">
//               Create username
//             </label>
//             <Field
//               type="text"
//               name="username"
//               id="username"
//               placeholder="Enter desired username"
//               className="form-control"
//               value={values.username}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.username && touched.username && errors.username}
//             <label htmlFor="email" className="mb-2 mt-3">
//               Business email
//             </label>
//             <Field
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter your business email address"
//               className="form-control"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.email && touched.email && errors.email}
//             <label htmlFor="firstName" className="mb-2 mt-3">
//               First Name
//             </label>
//             <Field
//               type="text"
//               name="firstName"
//               id="firstName"
//               placeholder="Enter your first name"
//               className="form-control"
//               value={values.firstName}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.firstName && touched.firstName && errors.firstName}

//             <label htmlFor="surname" className="mb-2 mt-3">
//               Surname
//             </label>
//             <Field
//               type="text"
//               name="surname"
//               id="surname"
//               placeholder="Enter your surname"
//               className="form-control"
//               value={values.surname}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.surname && touched.surname && errors.surname}
//             <label htmlFor="countryName" className="mb-2 mt-3">
//               Country/Region
//             </label>
//             <Select
//               selection
//               name="country"
//               id="countryName"
//               placeholder="Select a City"
//               options={countryOptions}
//               value={values.country}
//               onBlur={handleBlur}
//               onChange={(selectedValue) =>
//                 setFieldValue("country", selectedValue)
//               }
//             />
//             <h2 className="mt-4">Business contact number</h2>
//             <p>Prefix is prefilled based on selected country</p>
//             <label htmlFor="mobileNumber" className="mb-2 mt-3">
//               Mobile number
//             </label>
//             <Field
//               type="phone"
//               name="mobileNumber"
//               id="mobileNumber"
//               placeholder="Enter mobile number"
//               className="form-control"
//               value={values.mobileNumber}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.mobileNumber && touched.mobileNumber && errors.mobileNumber}
//             <div className="row my-4">
//               <div className="col-sm-8">
//                 <label htmlFor="landline" className="mb-2 mt-3">
//                   Landline number
//                 </label>
//                 <Field
//                   type="phone"
//                   name="landline"
//                   id="landline"
//                   placeholder="Enter landline number"
//                   className="form-control"
//                   value={values.landline}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 {errors.landline && touched.landline && errors.landline}
//               </div>
//               <div className="col-sm-4">
//                 <label htmlFor="extension" className="mb-2 mt-3 mx-1">
//                   Extension (Optional)
//                 </label>
//                 <Field
//                   type="text"
//                   name="extension"
//                   id="extension"
//                   placeholder="Enter extension"
//                   className="form-control mx-1"
//                   value={values.extension}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//               </div>
//             </div>

//             <label htmlFor="password" className="mb-2 mt-3">
//               New password
//             </label>
//             <Field
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter desired password"
//               className="form-control"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.password && touched.password && errors.password}

//             <label htmlFor="confirmPassword" className="mb-2 mt-3">
//               Confirm new password
//             </label>
//             <Field
//               type="password"
//               name="confirmPassword"
//               id="confirmPassword"
//               placeholder="Re-enter desired password"
//               className="form-control"
//               value={values.confirmPassword}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.confirmPassword &&
//               touched.confirmPassword &&
//               errors.confirmPassword}
//             <div className="inputDiv d-flex">
//               <label className="mb-2 mt-3">
//                 <Field type="checkbox" name="agreeToTerms" />
//                 &nbsp;I agree{" "}
//                 <Link to={"/registered-user-terms"}>
//                   registered user terms
//                 </Link>{" "}
//                 and{" "}
//                 <Link to={"/privacy"}>
//                   Privacy notification and cookies policy
//                 </Link>
//               </label>
//             </div>
//             {errors.agreeToTerms && touched.agreeToTerms && errors.agreeToTerms}
//             <p className="p-3">
//               By registering as a new user, you accept without restriction the
//               user terms (encompassing general user terms, registered user terms
//               and privacy notification) and you will be granted access to our
//               on-line business services. You can book and track your cargo,
//               submit your shipping instructions, get access to transport
//               documents, view your account statement and view or download
//               reports with detailed data of your cargo movements.
//             </p>
//             <p className="p-3">
//               As a registered customer, you can view your personal and company
//               details in my profile. A list of users within your company is also
//               available.
//             </p>
//             <p className="p-3">
//               Without waiving any other rights and remedies, any breach or
//               violation of the user terms is subject to legal prosecution.
//             </p>
//             <button
//               type="submit"
//               className="btn btn-primary my-3 registerUser-button"
//             >
//               Register
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// }
