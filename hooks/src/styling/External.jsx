import React from "react";

import "./External.css";

const External = () => {
  return (
    <form>
      <input className="input" type="email" placeholder="enter your email" />

      <input
        className="input"
        type="password"
        placeholder="enter your password"
      />

      <button>Login</button>
    </form>
  );
};

export default External;
