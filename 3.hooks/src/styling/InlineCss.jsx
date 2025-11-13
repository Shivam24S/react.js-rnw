import React from "react";

const InlineCss = () => {
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          height: "300px",
          width: "300px",
          padding: "50px",
          background: "linear-gradient(to right, #83a4d4, #b6fbff)",
          borderRadius: "10px",
        }}
      >
        <input
          type="email"
          placeholder="enter your email"
          style={{
            height: "50px",
            border: "none",
            borderRadius: "10px",
            textAlign: "center",
          }}
        />
        <input
          type="password"
          style={{
            height: "50px",
            border: "none",
            borderRadius: "10px",
            textAlign: "center",
          }}
          placeholder="enter your password"
        />
        <button
          style={{
            height: "50px",
            border: "none",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default InlineCss;
