import React from "react";
import styles from "./stats.module.css";

const Stats = ({ pending, completed, total }) => {
  return (
    <>
      {/* <table border="2px solid black">
        <thead>
          <tr>
            <th>Pending Task</th>
            <th>Completed Task</th>
            <th>Total Task</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles}>
            <td className={styles.statsCard}>{pending}</td>
            <td className={styles.statsCard}>{completed}</td>
            <td className={styles.statsCard}>{total}</td>
          </tr>
        </tbody>
      </table> */}

      <div className={styles.statsLayout}>
        <div className={styles.statsCard}>
          <h1>{pending}</h1>

          <p>Pending Task</p>
        </div>
        <div className={styles.statsCard}>
          <h1>{completed}</h1>

          <p>Completed Task</p>
        </div>
        <div className={styles.statsCard}>
          <h1>{total}</h1>

          <p>Total Task</p>
        </div>
      </div>
    </>
  );
};

export default Stats;
