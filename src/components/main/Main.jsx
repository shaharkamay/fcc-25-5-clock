import React, { useState, useEffect } from 'react'
import ControlsContainer from '../controls-container/ControlsContainer'
import TimerContainer from '../timer-container/TimerContainer';
import './main.scss';
import hhmmss from 'hh-mm-ss';
import Actions from '../actions/Actions';

function Main() {
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [breakValue, setBreakValue] = useState(5);
    const [sessionValue, setSessionValue] = useState(25);
    const [countDown, setCountDown] = useState(sessionValue * 60);
    const [isSession, setIsSession] = useState(true);

    let interval;
    const startTimer = () => {

        // let countDown = 1497;
    
        interval = setTimeout(() => {
            if (countDown <= 0) {
                // Stop Timer
                clearTimeout(interval);
                if(isSession) {
                    setCountDown(breakValue * 60);
                    setIsSession(false);
                } else {
                    setCountDown(sessionValue * 60);
                    setIsSession(true);
                }
            }  else {
                setCountDown(countDown - 1)
            }
        }, 1000);
    };
    useEffect(() => {
        if(isTimerRunning) {
            startTimer();
        }
    })
    
    const onActionClick = (e) => {
        if(e.target.id === 'start_stop') {
            if(!isTimerRunning) {
                setIsTimerRunning(!isTimerRunning);
            } else {
                clearTimeout(interval);
            }
        } else {
            setCountDown(sessionValue * 60);
            setIsTimerRunning(false);
            clearTimeout(interval);
        }
    }

    const onControlClick = (e) => {
        if(isTimerRunning) return;
        //Break buttons
        if(e.target.id.includes('break')) {
            if(e.target.id.includes('increment')) {
                setBreakValue(breakValue + 1);
            } else {
                if(breakValue <= 1) return;
                setBreakValue(breakValue - 1);
            }
        //Session buttons
        } else {
            if(e.target.id.includes('increment')) {
                setSessionValue(sessionValue + 1)
                setCountDown(countDown + 60);
            } else {
                if(sessionValue <= 1) return;
                setSessionValue(sessionValue - 1)
                setCountDown(countDown - 60);
            }
        }
    }
    return (
        <main>
            <ControlsContainer 
                sessionValue={sessionValue} 
                breakValue={breakValue} 
                onClick={onControlClick} 
            />
            <TimerContainer 
                label={isSession ? 'Session' : 'Break'} 
                timerMinutes={Math.floor(countDown / 60)} 
                timerSeconds={hhmmss.fromS(countDown).split(':')[hhmmss.fromS(countDown).split(':').length - 1]} 
            />
            <Actions 
                onClick={onActionClick} 
            />
        </main>
    )
}

export default Main