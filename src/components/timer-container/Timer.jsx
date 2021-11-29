import React from 'react'

const Timer = ({ timerMinutes, timerSeconds }) => {
    return (
        <div className="timer">
            <label id="timer-label">Session</label>
            <label id="time-left">{timerMinutes}:{timerSeconds}</label>
        </div>
    )
}
Timer.defaultProps = { timerMinutes: "25", timerSeconds: "00" }

export default Timer
