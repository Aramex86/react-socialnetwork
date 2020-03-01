import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className="dialogs__wrapper-items active-item">
        <NavLink className="dialogs__wrapper-links" to={path}>
            <img src={props.img} alt="avatar"/>
            {props.name}
        </NavLink>
    </div>
}


export default DialogItem;