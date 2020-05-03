import React from 'react';
import  DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {addNewMessageActionCreator,updateMessageTextActionCreator} from '../Redux/state';


const addNewMessage = React.createRef();

const Dialogs = (props) => {

    const addMessage =(e) =>{
        e.preventDefault();
        props.dispatch(addNewMessageActionCreator());
    }

    const onChangeMessage = () =>{
         const text = addNewMessage.current.value;
         props.dispatch(updateMessageTextActionCreator(text));
    }
    
    let dialog = props.dialogs.map( (dialog,index)  => <DialogItem key={index} name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let message = props.messages.map((message,index) => <Message key={index} message={message.message} id={message.id} img={message.img}/>);

    return (
        <div className="dialogs__wrapper">
            <div className="dialogs__wrapper-dialogs">
                {dialog} 
            </div>
            <div className="dialogs__wrapper-messages">
               {message}
                <form>
                    <textarea ref={addNewMessage} onChange={onChangeMessage} value={props.newAnswer} placeholder="your message here..."></textarea>
                    <button  onClick ={addMessage}>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;