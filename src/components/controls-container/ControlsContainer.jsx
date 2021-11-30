import React from 'react'
import Control from './Control'

function ControlsContainer({ onClick, sessionValue, breakValue }) {
    return (
        <div className="controls-container">
            <Control value={breakValue} labelId="break-label" labelName="Break Length" btnId="break" onClick={onClick}></Control>
            <Control value={sessionValue} labelId="session-label" labelName="Session Length" btnId="session" onClick={onClick}></Control>
        </div>
    )
}

export default ControlsContainer
