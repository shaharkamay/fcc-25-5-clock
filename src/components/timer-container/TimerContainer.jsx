import React from 'react'
import Timer from './Timer'

function TimerContainer({ timerMinutes, timerSeconds, label }) {
    return (
        <div className="timer-container">
            <Timer timerMinutes={timerMinutes} timerSeconds={timerSeconds} label={label} />
        </div>
    )
}

export default TimerContainer
