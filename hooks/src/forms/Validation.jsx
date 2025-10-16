import { useState } from "react";

const Validation = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setErrors] = useState({});

  const handleInputData = (field, e) => {
    setInputData((data) => {
      return {
        ...data,
        [field]: e.target.value,
      };
    });
  };

  const validation = () => {
    const newErrors = {};

    if (!inputData.name.trim()) {
      newErrors.name = "name is required";
    }

    if (!inputData.email.includes("@")) {
      newErrors.email = "invalid email format";
    }

    if (inputData.password.length < 6) {
      newErrors.password = "password must contain at least 6 character";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = validation();

    console.log("validate", validateErrors);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    console.log("form submitted", inputData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={inputData.name}
          onChange={(e) => handleInputData("name", e)}
        />

        {error.name && <p style={{ color: "red" }}>{error.name}</p>}

        <input
          type="email"
          placeholder="enter your email"
          value={inputData.email}
          onChange={(e) => handleInputData("email", e)}
        />

        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <input
          type="password"
          placeholder="enter your password"
          value={inputData.password}
          onChange={(e) => handleInputData("password", e)}
        />

        {error.password && <p style={{ color: "red" }}>{error.password}</p>}

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Validation;
