import React from 'react'
import Control from './Control'

function ControlsContainer() {
    return (
        <div className="controls-container">
            <Control labelId="break-label" labelName="Break Length" btnId="break" defaultLength="5"></Control>
            <Control labelId="session-label" labelName="Session Length" btnId="session" defaultLength="25"></Control>
        </div>
    )
}

export default ControlsContainer
