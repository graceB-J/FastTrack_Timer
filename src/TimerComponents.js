import React from "react";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

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
      <Button className="timerButton" id="start" onClick={handleStart}>
        Start
      </Button>
      <Button className="timerButton" variant="danger" onClick={handleCancel}>Cancel</Button>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id="popover-positioned-bottom">
            <Popover.Title as="h3">Set Fast Length</Popover.Title>
            <Popover.Content>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Content>
          </Popover>
        }
      >
        <Button className="timerButton" variant="secondary">Set Time</Button>
      </OverlayTrigger>{' '}
    </div>
  );
};
export { Countdown, TimerButton };