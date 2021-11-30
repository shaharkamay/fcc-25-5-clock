import React from 'react'
import Button from '../main/Button'
import Length from './Length';

function Control({ labelId, labelName, btnId, onClick, value }) {
    return (
        <div className="control">
            <label id={labelId}>{labelName}</label>
            <div className="control__buttons">
                <Button id={`${btnId}-increment`} value="⬆" className="btn" onClick={onClick} />
                <Length id={`${btnId}-length`} value={value} />
                <Button id={`${btnId}-decrement`} value="⬇" className="btn" onClick={onClick} />
            </div>
        </div>
    )
}

export default Control
