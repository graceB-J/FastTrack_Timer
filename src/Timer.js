import React, { useState, useEffect } from "react";

const Timer = ({ handleFinished, totalFastTime }) => {
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
    <div>
      {fasting && <p>Fasting Period</p>}
      {!fasting && <p>Eating Period</p>}
      <Countdown timeLeft={timeLeft} />
      <TimerButton handleStart={handleStart} handleCancel={handleCancel} />
      <ProgressBar totalTime={totalTime} timeLeft={timeLeft} />
    </div>
  );
};

const Countdown = ({ timeLeft }) => {
  return (
    <p>
      {Math.floor(timeLeft / (60 * 60))}:{Math.floor((timeLeft / 60) % 60)}:
      {Math.floor(timeLeft % 60)}
    </p>
  );
};

const TimerButton = ({ handleStart, handleCancel }) => {
  //Start + Stop/Cancel controls for timer
  return (
    <div>
      <button id="start" onClick={handleStart}>
        Start
      </button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

const ProgressBar = ({ totalTime, timeLeft }) => {
  return (
    <div>
      <p>{(timeLeft / totalTime) * 100}%</p>
    </div>
  );
};


export default Timer;
