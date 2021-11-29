import React, { useState, useEffect } from 'react'
import ControlsContainer from '../controls-container/ControlsContainer'
import TimerContainer from '../timer-container/TimerContainer';
import './main.scss';
import hhmmss from 'hh-mm-ss';
import Actions from '../actions/Actions';

function Main() {
    const [countDown, setCountDown] = useState(1500);
    // const [timerSeconds, setTimerSeconds] = useState();
    let interval;
    const startTimer = () => {

        // let countDown = 1497;
    
        interval = setTimeout(() => {
            if (countDown <= 0) {
                // Stop Timer
                clearTimeout(interval);
            }  else {
                setCountDown(countDown - 1)
            }
        }, 1000);
    };
      
    // useEffect(() => {
    //     startTimer();
    // });
    
    return (
        <main>
            <ControlsContainer />
            <TimerContainer timerMinutes={hhmmss.fromS(countDown).split(':')[0]} timerSeconds={hhmmss.fromS(countDown).split(':')[1]} />
            <Actions />
        </main>
    )
}

export default Main