import React from 'react'
import Timer from './Timer'

function TimerContainer({ timerMinutes, timerSeconds }) {
    return (
        <div className="timer-container">
            <Timer timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
        </div>
    )
}

export default TimerContainer
