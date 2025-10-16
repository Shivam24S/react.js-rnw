import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import FormError from "./FormError";

const FormikForm = () => {
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, "name must be at least 2 character long")
      .max(50, "name can't be exceed  more than 50 character")
      .required("name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup
      .string()
      .min(6, "password must be at least 6 character long")
      .required("password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("form submitted", values);
          resetForm();
        }}
      >
        <Form>
          <Field name="name" type="text" placeholder="enter your name" />

          <FormError name="name" />

          <Field name="email" type="email" placeholder="enter your email" />
          <FormError name="email" />

          <Field
            name="password"
            type="password"
            placeholder="enter your password"
          />
          <FormError name="password" />

          <button type="submit">submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default FormikForm;
