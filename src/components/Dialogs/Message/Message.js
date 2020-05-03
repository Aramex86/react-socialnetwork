import React from 'react';

const Message = (props) => {
    return (
        <div className='message__wrapper'>
            <img src={props.img} alt="avatar"/>
            <div className="dialogs__wrapper-messages-message">
                {props.message}
                </div>
        </div>
    );
}

export default Message;