import React from 'react'

function Button({ id, value }) {
    return (
        <button id={id}>
            {value}
        </button>
    )
}

export default Button
