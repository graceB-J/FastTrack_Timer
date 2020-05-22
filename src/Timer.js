import React, { useState, useEffect } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import { Countdown, TimerButton } from "./TimerComponents.js";
import "./Timer.css";
import Chicken from './imgs/fried_chicken.png';
import NoChicken from './imgs/no_chicken.png';

const Timer = (props) => {
  const { handleFinished, totalFastTime, handleAddFast } = props;

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
            setShow(false);
            setShowNotif(false);
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
    setHalfMessage(true);
  };

  const handleCancel = () => {
    const start = document.getElementById("start");
    start.disabled = false;
    setTotalTime(totalFastTime);
    setStartTime(-1);
    setFasting(true);
  };

  const [show, setShow] = useState(false);
  const [halfMessage, setHalfMessage] = useState(false);

  useEffect(() => {
    if (timeLeft - 1 < totalTime / 2 && halfMessage && fasting) {
      setShow(true);
      setHalfMessage(false);
    }
  })

  const [showNotif, setShowNotif] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  useEffect(() => {
    if (startTime !== -1) {
      const interval = setInterval(() => {
        if (fasting) {
          setQuoteIndex(Math.floor(20 * Math.random()));
          setShowNotif(true)
        }
      }, 30 * 12 * 5000);
      return () => clearInterval(interval);
    } else {
      setTimeLeft(totalTime);
    }
  }, [startTime]);

  const InspirationalQuoteArr = ["You got this!", "Keep it up!",
    "Feel the burn", "All those calories lost!", "You're allowed to drink water!",
    "Amazing. Incredible.", "You can do anything you set your mind to",
    "Feel that weight leaving your body!", "Goodbye calories", "3 months from now, you'll thank yourself",
    "Be your best you", "You can do it!", "Don't eat that muffin!", "Intermittent Fasting is SCIENCE",
    "Water still doesn't count", "If you are tired of starting over, stop giving up.", "Believe in your goals!",
    "Don't even think about eating that donut", "Think about how proud you will be after this",
    "Roses are red, violets are blue, your stomach is grumbling, keep on fasting, you!"];

  return (
    <div className="timerRoot">
      {fasting && <img src={NoChicken} className="fastIcon" />}
      {fasting && <h1>Fasting Period</h1>}
      {!fasting && <img src={Chicken} className="fastIcon" />}
      {!fasting && <h1>Eating Period</h1>}
      <Countdown style={{ position: "relative", zIndex: "1" }} timeLeft={timeLeft} />
      <ProgressBar
        style={{ height: "60px", marginTop: "-60px", position: "relative", zIndex: "-1" }}
        className="progress"
        now={(timeLeft / totalTime) * 100} />
      <TimerButton
        handleStart={handleStart}
        handleCancel={handleCancel}
        handleAddFast={handleAddFast} />
      <Alert show={show} variant="success">
        <Alert.Heading>Don't give up! You're halfway there!</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close alert
          </Button>
        </div>
      </Alert><Alert show={showNotif} variant="success">
        <Alert.Heading>{InspirationalQuoteArr[quoteIndex]}</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowNotif(false)} variant="outline-success">
            Close alert
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default Timer;