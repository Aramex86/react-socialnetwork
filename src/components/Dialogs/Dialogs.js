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

let dialogsData = [
    {id:1,name:'Olaga'},
    {id:2,name:'Vasea'},
    {id:3,name:'Oleg'},
    {id:4,name:'Misha'},
    {id:5,name:'Slava'},
]
let messagesData = [
    {id:1,message:'Hello how are you'},
    {id:2,message:'Hello how are you to'},
    {id:3,message:'Happy birthday'},
    {id:4,message:'Hello how are you'},
]

const Dialogs = () => {
    return (
        <div className="dialogs__wrapper">
            <h3>Dialogs</h3>
            <div className="dialogs__wrapper-dialogs">

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
               {/*  <DialogItem name='Vasea' id='2'/>
                <DialogItem name='Oleg' id='3'/>
                <DialogItem name='Misha' id='4'/>
                <DialogItem name='Slava' id='5'/> */}

            </div>
            <div className="dialogs__wrapper-messages">

                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
               {/*  <Mesage message="Hello how are you to "/>
                <Mesage message="Happy birthday"/>
                <Mesage message="Hello how are you"/> */}

            </div>
        </div>
    )
}

export default Dialogs;