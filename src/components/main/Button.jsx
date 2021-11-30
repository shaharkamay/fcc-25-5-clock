import React from 'react'

function Button({ id, value, onClick }) {
    return (
        <button id={id} onClick={(e) => onClick(e)}>
            {value}
        </button>
    )
}

export default Button
