import React, { useState, useEffect } from 'react';

const Timer = ({ totalFastTime }) => {
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
    const [timeLeft, setTimeLeft] = useState(totalFastTime);

    useEffect(() => {
        if (startTime !== -1) {
            setTimeLeft(totalFastTime - ((Date.now() / 1000) - startTime ));
            const interval = setInterval(() => {
                setTimeLeft(totalFastTime - ((Date.now() / 1000) - startTime ));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [startTime]);

    return (
        <p>{Math.floor(timeLeft / (60 * 60))}:{Math.floor(timeLeft / 60 % 60)}:{Math.floor(timeLeft % 60)}</p>
    )
}

const TimerButton = ({ handleStart, handleCancel }) => {
    //Start + Stop/Cancel controls for timer
    return (
        <div>
            <button id ="start" onClick={handleStart}>Start</button>
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
