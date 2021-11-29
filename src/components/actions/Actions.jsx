import React from 'react'
import Button from '../main/Button'

function Actions() {
    return (
        <div className="actions">
            <Button id="start_stop" value="⏯" />
            <Button id="reset" value="🔄" />
        </div>
    )
}

export default Actions
