import React from 'react';
import './style.css';

function Header(props) {
    return (
        <div className="header-container">
            <h1 className="title">{props.title}</h1>
        </div>
    )
}

export default Header