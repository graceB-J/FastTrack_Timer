import React from "react";

const History = ({ history }) => {
  return (
    <div>
      <p>History:</p>
      {history.map((entry) => {
        return (
          <div>
            <p>
              Date and Time:
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
            </p>
            <p>
              Length of fast: {Math.floor(entry.fastLength / 3600)}:
              {(entry.fastLength / 60) % 60}
            </p>
            <p>
              additional comments: {entry.difficulty}
            </p>
          </div>
        );
      })}
      <p>Number of completed fasts: {history.length}</p>
      <p>Total hours fasted:</p>
      <p>Average fast time: </p>
    </div>
  );
};

export default History;
