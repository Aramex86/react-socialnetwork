import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    
    return <div className="dialogs__wrapper-items active-item">
        <NavLink className="dialogs__wrapper-links" to={path}>
            {props.name}
        </NavLink>
    </div>
}

const Message = (props) => {
    return <div className="dialogs__wrapper-messages-message">{props.message}</div>
}

let dialogs = [
    {id:1,name:'Olaga'},
    {id:2,name:'Vasea'},
    {id:3,name:'Oleg'},
    {id:4,name:'Misha'},
    {id:5,name:'Slava'},
]
let messages = [
    {id:1,message:'Hello how are you'},
    {id:2,message:'Hello how are you to'},
    {id:3,message:'Happy birthday'},
    {id:4,message:'Hello how are you'},
]

let dialog = dialogs.map( d  => <DialogItem name={d.name} id={d.id}/>);
let message = messages.map(m => <Message message={m.message} id={m.id}/>);


const Dialogs = () => {
    return (
        <div className="dialogs__wrapper">
            <h3>Dialogs</h3>
            <div className="dialogs__wrapper-dialogs">
                {dialog}
            </div>
            <div className="dialogs__wrapper-messages">
               {message}
            </div>
        </div>
    )
}

export default Dialogs;