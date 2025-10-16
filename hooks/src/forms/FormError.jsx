import { ErrorMessage } from "formik";

import React from "react";

const FormError = ({ name }) => {
  return (
    <>
      <ErrorMessage
        name={name}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      />
    </>
  );
};

export default FormError;
