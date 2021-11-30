import React, { useState, useEffect } from 'react'
import ControlsContainer from '../controls-container/ControlsContainer'
import TimerContainer from '../timer-container/TimerContainer';
import './main.scss';
import hhmmss from 'hh-mm-ss';
import Actions from '../actions/Actions';
import audio from '../../assets/beep.wav';

function Main() {
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [breakValue, setBreakValue] = useState(5);
    const [sessionValue, setSessionValue] = useState(25);
    const [countDown, setCountDown] = useState(sessionValue * 60);
    const [isSession, setIsSession] = useState(true);

    const beep = new Audio(audio);

    let interval;
    const startTimer = () => {

    
        interval = setTimeout(() => {
            if (countDown <= 0) {
                // Stop Timer
                clearTimeout(interval);
                beep.play();
                setTimeout(() => {
                    if(isSession) {
                        setCountDown(breakValue * 60);
                        setIsSession(false);
                    } else {
                        setCountDown(sessionValue * 60);
                        setIsSession(true);
                    }
                    beep.pause();
                }, 2000)
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
            if(isTimerRunning) {
                setIsTimerRunning(false);
                clearTimeout(interval);
            } else {
                setIsTimerRunning(true);
            }
        } else {
            setIsTimerRunning(false);
            setCountDown(sessionValue * 60);
            clearTimeout(interval);
        }
    }

    const onControlClick = (e) => {
        if(isTimerRunning) return;
        //Break buttons
        if(e.target.id.includes('break')) {
            if(e.target.id.includes('increment')) {
                if(breakValue >= 60) return;
                setBreakValue(breakValue + 1);
                setCountDown((breakValue + 1) * 60);
            } else {
                if(breakValue <= 1) return;
                setBreakValue(breakValue - 1);
                setCountDown((breakValue - 1) * 60);
            }
        //Session buttons
        } else {
            if(e.target.id.includes('increment')) {
                if(sessionValue >= 60) return;
                setSessionValue(sessionValue + 1)
                setCountDown((sessionValue + 1) * 60);
            } else {
                if(sessionValue <= 1) return;
                setSessionValue(sessionValue - 1)
                setCountDown((sessionValue - 1) * 60);
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