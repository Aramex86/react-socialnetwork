import React from 'react';
import  DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';


const addNewMessage = React.createRef();

const Dialogs = (props) => {

    const addMessage =(e) =>{
        e.preventDefault();
        const text = addNewMessage.current.value;
        alert(text);
        addNewMessage.current.value= "";
    }


    
    let dialog = props.dialogs.map( (dialog,index)  => <DialogItem key={index} name={dialog.name} id={dialog.id} img={dialog.img}/>);
    let message =props.messages.map((message,index) => <Message key={index} message={message.message} id={message.id} img={message.img}/>);

    return (
        <div className="dialogs__wrapper">
            <div className="dialogs__wrapper-dialogs">
                {dialog} 
            </div>
            <div className="dialogs__wrapper-messages">
               {message}
                <form>
                    <textarea ref={addNewMessage} placeholder="your message here..."></textarea>
                    <button onClick ={addMessage}> SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;