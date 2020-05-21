import React from "react";

import Button from "react-bootstrap/Button";

import './TimerComponents.css'

const Countdown = (props) => {
  const { timeLeft } = props;
  return (
    <h1>
      {Math.floor(timeLeft / (60 * 60))}:{Math.floor((timeLeft / 60) % 60)}:
      {Math.floor(timeLeft % 60)}
    </h1>
  );
};

const TimerButton = (props) => {
  const { handleStart, handleCancel } = props;
  return (
    <div>
      <Button className="startButton" id="start" onClick={handleStart}>
        Start
      </Button>
      <Button className="cancelButton" variant="danger" onClick={handleCancel}>Cancel</Button>
    </div>
  );
};

export {Countdown, TimerButton};