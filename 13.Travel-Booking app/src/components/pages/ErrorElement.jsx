import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
  const navigate = useNavigate();

  return (
    <div>
      ErrorElement
      <br />
      <button className="btn btn-primary"  onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default ErrorElement;
