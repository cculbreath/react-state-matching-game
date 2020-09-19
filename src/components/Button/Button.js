import React from 'react';
import './Button.css';

const Button = (props) => ( <button onClick={props.startGame}>
    {(prtops.playing) ? 'reset' : 'start'}
</button> )

export default Button
