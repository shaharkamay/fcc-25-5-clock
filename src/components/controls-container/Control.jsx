import React from 'react'
import Button from '../main/Button'
import Length from './Length';

function Control({ labelId, labelName, btnId, defaultLength }) {
    return (
        <div className="control">
            <label id={labelId}>{labelName}</label>
            <div className="control__buttons">
                <Button id={`${btnId}-increment`} value="⬆" className="btn" />
                <Length id={`${btnId}-length`} value={defaultLength} />
                <Button id={`${btnId}-decrement`} value="⬇" className="btn" />
            </div>
        </div>
    )
}

export default Control
