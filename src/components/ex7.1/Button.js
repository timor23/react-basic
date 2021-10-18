import React from 'react'

const Button = ({onClick, name}) => {
    return (
        <div>
            <input onClick={onClick} type="button" value={name}/>
        </div>
    )
}

export default Button;