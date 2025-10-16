import { useState } from "react";

const Validation = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setErrors] = useState({});

  const [formData, setFormData] = useState([]);

  const handleChange = (field, e) => {
    setInputData((data) => {
      return {
        ...data,
        [field]: e.target.value,
      };
    });
  };

  const validation = () => {
    let newErrors = {};

    if (!inputData.name.trim()) {
      newErrors.name = "name is required";
    }

    if (!inputData.email.includes("@")) {
      newErrors.email = "invalid email format";
    }

    if (inputData.password.length < 6) {
      newErrors.password = "password length  must be at least 6 character";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = validation();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setFormData((data) => [...data, inputData]);
    setInputData({ name: "", email: "", password: "" });
    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={inputData.name}
          onChange={(e) => handleChange("name", e)}
        />
        <input
          type="email"
          placeholder="enter your email"
          value={inputData.email}
          onChange={(e) => handleChange("email", e)}
        />
        <input
          type="password"
          placeholder="enter your password"
          value={inputData.password}
          onChange={(e) => handleChange("password", e)}
        />

        <button type="submit">submit</button>
      </form>

      {error.name && <p>{error.name}</p>}
      {error.email && <p>{error.email}</p>}
      {error.password && <p>{error.password}</p>}
    </>
  );
};

export default Validation;
