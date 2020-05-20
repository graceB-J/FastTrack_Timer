import React from "react";

import Table from "react-bootstrap/Table";

const History = (props) => {
  const {history} = props;

  return (
    <div>
      <p>History:</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Success?</th>
            <th>Start Date</th>
            <th>Fast Duration</th>
            <th>Difficulty</th>
            <th>Additional Comments</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => {
            return (
              <tr>
                <td>-1</td>
                <td>{entry.success}</td>
                <td>
                  {entry.startDate.getFullYear() +
                    "-" +
                    (entry.startDate.getMonth() + 1) +
                    "-" +
                    entry.startDate.getDate() +
                    " " +
                    entry.startDate.getHours() +
                    ":" +
                    entry.startDate.getMinutes() +
                    ":" +
                    entry.startDate.getSeconds()}
                </td>
                <td>
                  {Math.floor(entry.fastLength / 3600)}:{(entry.fastLength / 60) % 60}
                </td>
                <td>
                  {entry.difficulty}
                </td>
                <td>
                  {entry.additionalComments}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p>Number of completed fasts: {history.length}</p>
      <p>
        Total hours fasted:{" "}
        {Math.round(
          (history.reduce(function (prev, current) {
            return prev + current.fastLength;
          }, 0) /
            3600) *
            100
        ) / 100}
      </p>
      <p>
        Average fast time:{" "}
        {Math.round(
          (history.reduce(function (prev, current) {
            return prev + current.fastLength;
          }, 0) /
            3600) *
            100
        ) /
          100 /
          history.length}
      </p>
    </div>
  );
};

export default History;