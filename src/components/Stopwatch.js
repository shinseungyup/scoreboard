import React, {useEffect, useRef, useState} from "react";

export const Stopwatch = (props) => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useInterval(() => {
        if(isRunning) {
            setTimer(timer + 1);
        }
    }, 1000);

    let handleStopwatch = () => {
        setIsRunning(!isRunning);
    };

    let handleReset = () => {
        setIsRunning(false);
        setTimer(0);
    }

    return (
        <div className='stopwatch'>
            <h2>Stopwatch</h2>
            <span className='stopwatch-time'>{timer}</span>
            <button onClick={handleStopwatch}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

function useInterval(callback) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [])
}