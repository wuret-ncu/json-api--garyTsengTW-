import React from 'react';
import './Nav.css'

function Nav(props){
    return(
        <div className="nav">{props.text}</div>
    )
}

export default Nav;