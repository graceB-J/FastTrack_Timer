import React from "react";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import SelectionArea from "./SelectionArea.js"

import './TimerComponents.css'

const Countdown = (props) => {
  const pad = (num, size) => {
    var s = "000000000" + num;
    return s.substr(s.length-size);
  }

  const { timeLeft } = props;
  return (
    <h1>
      {pad(Math.floor(timeLeft / (60 * 60)), 2)}:
      {pad(Math.floor((timeLeft / 60) % 60), 2)}:
      {pad(Math.floor(timeLeft % 60), 2)}
    </h1>
  );
};

const TimerButton = (props) => {
  const { handleStart, handleCancel, handleAddFast} = props;
  return (
    <div>
      <Button className="timerButton" id="start" onClick={handleStart}>
        Start
      </Button>
      <Button className="timerButton" variant="danger" onClick={handleCancel}>Cancel</Button>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover>
            <Popover.Title as="h3">Set Fast Length</Popover.Title>
            <Popover.Content>
              <SelectionArea handleAddFast={handleAddFast} />
            </Popover.Content>
          </Popover>
        }
      >
        <Button className="timerButton" variant="secondary">Toggle Timer Settings</Button>
      </OverlayTrigger>{' '}
    </div>
  );
};
export { Countdown, TimerButton };