import React from "react";

const Stats = ({ total, completed, pending }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>total</th>
            <th>pending</th>
            <th>completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{total}</td>
            <td>{pending}</td>
            <td>{completed}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Stats;
