import React from 'react'
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    return (
        <div>
            <NavLink to="/dialogs">
            <img src={props.img}alt="avatar"/>
            <span>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default Friends;