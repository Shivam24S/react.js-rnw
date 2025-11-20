import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    number: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        fullName: "Mark",
        lastName: "Otto",
        username: "",
        number: "",
        state: "",
        zip: "",
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              //   as={Col}
              //   md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>FullName</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="enter your name"
                value={values.fullName}
                onChange={handleChange}
                isValid={touched.fullName && !errors.fullName}
                style={{ width: "100%" }}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              //   as={Col}
              //   md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="+91"
                name="number"
                value={values.number}
                onChange={handleChange}
                isInvalid={!!errors.number}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.number}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;
