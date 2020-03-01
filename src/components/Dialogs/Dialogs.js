import React from 'react';
import  DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';






const Dialogs = (props) => {
    
    let dialog = props.dialogs.map( (dialog,index)  => <DialogItem key={index} name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let message =props.messages.map((message,index) => <Message key={index} message={message.message} id={message.id} img={message.img}/>);

    return (
        <div className="dialogs__wrapper">
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