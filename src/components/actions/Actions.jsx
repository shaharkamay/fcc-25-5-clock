import React from 'react'
import Button from '../main/Button'

function Actions({ onClick }) {
    return (
        <div className="actions">
            <Button id="start_stop" value="⏯" onClick={onClick} />
            <Button id="reset" value="🔄" onClick={onClick} />
        </div>
    )
}

export default Actions
