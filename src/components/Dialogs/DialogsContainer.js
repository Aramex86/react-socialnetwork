import React from 'react';
import  DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {addNewMessageActionCreator,updateMessageTextActionCreator} from '../Redux/messages-reducer';
import Dialogs from './Dialogs';


//const addNewMessage = React.createRef();

const DialogsContainer = (props) => {
    
    let state = props.store.getState().messagesPage;

    const addMessage =(e) =>{
        props.store.dispatch(addNewMessageActionCreator());
    }

    const onChangeMessage = (text) =>{
        props.store.dispatch(updateMessageTextActionCreator(text));
    }
    
    
    return <Dialogs updateMessage={onChangeMessage} sendMessage={addMessage} messagesPage={state}/> 
}

export default DialogsContainer;