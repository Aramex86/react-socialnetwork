import React from 'react';
import  DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {addNewMessageActionCreator,updateMessageTextActionCreator} from '../Redux/state';


//const addNewMessage = React.createRef();

const Dialogs = (props) => {
    let state = props.store.getState().messagesPage;

    let newAnswer = state.newAnswer;

    const addMessage =(e) =>{
        e.preventDefault();
        props.store.dispatch(addNewMessageActionCreator());
    }

    const onChangeMessage = (e) =>{
         //const text = addNewMessage.current.value;
        const text = e.target.value;
        props.store.dispatch(updateMessageTextActionCreator(text));
         
    }
    
    const dialog = state.dialogs.map( (dialog,index)  => <DialogItem key={index} name={dialog.name} id={dialog.id} img={dialog.img}/>);
    const message = state.messages.map((message,index) => <Message key={index} message={message.message} id={message.id} img={message.img}/>);
    return (
        <div className="dialogs__wrapper">
            <div className="dialogs__wrapper-dialogs">
                {dialog} 
            </div>
            <div className="dialogs__wrapper-messages">
               {message}
                <form>
                    <textarea  value={newAnswer} onChange={onChangeMessage}   placeholder="your message here..."></textarea>
                    <button  onClick ={addMessage}>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;