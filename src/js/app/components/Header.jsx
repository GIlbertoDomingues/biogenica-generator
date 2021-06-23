import React from 'react';
import Brand from './Brand.jsx';

function Header (props)
{
    return (
        <header>
            <Brand />
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;