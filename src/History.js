import React from "react";

const History = (props) => {
  const {history} = props;
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
          </div>
        );
      })}
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
