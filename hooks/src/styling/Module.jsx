import React from "react";

import styles from "./ModuleType.module.css";

const Module = () => {
  return (
    <form>
      <input
        className={styles.input}
        type="email"
        placeholder="enter your email"
      />

      <input
        className={styles.input}
        type="password"
        placeholder="enter your password"
      />

      <button className={styles.btn}>Login</button>
    </form>
  );
};

export default Module;
