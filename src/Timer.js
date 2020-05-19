import React, { useState, useMemo } from 'react';

const Timer = ({ totalFastTime }) => {
    // let propTypes = {
    //     model: object.isRequired,
    //     title: string
    // }

    // let defaultProps = {
    //     model: {
    //         id: 0
    //     },
    //     title: 'Your Name'
    // }

    // timeLeft in seconds
    const [startTime, setStartTime] = useState(-1);

    const handleStart = () => {
        setStartTime(Date.now() / 1000);
    }

    const handleCancel = () => {
        //TODO STUB
    }

    return (
        <div>
            <Countdown
                totalFastTime={totalFastTime}
                startTime={startTime} />
            <TimerButton
                handleStart={handleStart}
                handleCancel={handleCancel} />
            <ProgressBar />
        </div>
    )
}

const Countdown = ({ totalFastTime, startTime }) => {
    const [timeLeft, setTimeLeft] = useState(-1);
    // window.setInterval(function () {
    //     /// call your function here
    // }, 5000);
    // setTimeLeft(totalFastTime - (startTime - Date.now()));
    return (
        <p>{Math.floor(timeLeft / (60 * 60))}:{Math.floor(timeLeft / 60 % 60)}:{Math.floor(timeLeft % 60)}</p>
    )
}

const TimerButton = ({ handleStart, handleCancel }) => {
    //Start + Stop/Cancel controls for timer
    return (
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

const ProgressBar = () => {
    return (
        <div><p>[|||||||||||||||||||||||||||||||||||||||||]</p></div>
    )
}

export default Timer
