import React from 'react';
import  DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';


//const addNewMessage = React.createRef();

const Dialogs = (props) => {
    if(!props.isAuth) return<Redirect to='/login'/>

    let newAnswer = props.newAnswer;

    const dialog = props.dialogs.map( (dialog,index)  => <DialogItem key={index} name={dialog.name} id={dialog.id} img={dialog.img}/>);
    const message = props.messages.map((message,index) => <Message key={index} message={message.message} id={message.id} img={message.img}/>);


    const addMessage =(e) =>{
        e.preventDefault();
        props.sendMessage();
        //props.store.dispatch(addNewMessageActionCreator());
    }

    const onChangeMessage = (e) =>{
         //const text = addNewMessage.current.value;
        const text = e.target.value;
        props.updateMessage(text);
        //props.store.dispatch(updateMessageTextActionCreator(text));
         
    }
    
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