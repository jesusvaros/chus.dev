import React from 'react';
import LogoArray from './LogoArray'
import './LogoArray.scss'

function Logo({index}:{index:number}) {
    return (
        <div className="Logo">
            {LogoArray[index]}
        </div>
    );
}

export default Logo;
