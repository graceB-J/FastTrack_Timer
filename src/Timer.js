import React, { useState, useEffect } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

import {Countdown, TimerButton} from "./TimerComponents.js";
import "./Timer.css";
import { ReactComponent as Chicken } from './imgs/chicken.svg';
import { ReactComponent as NoChicken } from './imgs/nochicken.svg';

const Timer = (props) => {
  const { handleFinished, totalFastTime } = props;

  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(-1);
  const [timeLeft, setTimeLeft] = useState(totalFastTime);
  const [fasting, setFasting] = useState(true);
  const [totalTime, setTotalTime] = useState(totalFastTime);

  useEffect(() => {
    if (startTime !== -1) {
      setTimeLeft(totalTime - (Date.now() / 1000 - startTime));
      const interval = setInterval(() => {
        setTimeLeft(totalTime - (Date.now() / 1000 - startTime));
        if (totalTime - (Date.now() / 1000 - startTime) < 1) {
          if (fasting) {
            handleFinished({
              startDate: startDate,
              fastLength: totalFastTime,
            });
            setFasting(false);
            setTotalTime(24 * 60 * 60 - totalTime);
            setStartTime(Date.now() / 1000);
          } else {
            clearInterval(interval);
          }
        }
      }, 500);
      return () => clearInterval(interval);
    } else {
      setTimeLeft(totalTime);
    }
  }, [startTime]);

  useEffect(() => {
    setTotalTime(totalFastTime);
    setTimeLeft(totalFastTime);
  }, [totalFastTime]);

  const handleStart = () => {
    let today = new Date();
    setStartDate(today);
    const start = document.getElementById("start");
    start.disabled = true;
    setStartTime(Date.now() / 1000);
  };

  const handleCancel = () => {
    const start = document.getElementById("start");
    start.disabled = false;
    setTotalTime(totalFastTime);
    setStartTime(-1);
    setFasting(true);
  };

  return (
    <div className="timerRoot">
      {fasting && <Chicken className="fastIcon"/>}
      {fasting && <h1>Fasting Period</h1>}
      {!fasting && <NoChicken className="fastIcon"/>}
      {!fasting && <h1>Eating Period</h1>}
      <ProgressBar
        style={{height: "60px"}}
        className="progress"
        now={(timeLeft / totalTime) * 100}
        label={<Countdown timeLeft={timeLeft} />} />
      <TimerButton
        handleStart={handleStart}
        handleCancel={handleCancel} />
    </div>
  );
};

export default Timer;