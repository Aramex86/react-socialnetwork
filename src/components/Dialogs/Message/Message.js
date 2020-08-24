import React from 'react';
import avatar from '../../../assets/images/user.png';

const Message = ({profile,...props}) => {

    console.log(props)
    return (
        <div className='message__wrapper'>
           {profile?<img src={profile.photos.small} alt="avatar"/>:<img src={avatar} alt="avatar" style={{width:'7rem',height:'4rem'}}/>}  {/* <img src={props.img} alt="avatar"/> */}
            <div className="dialogs__wrapper-messages-message">
                {props.message}
                </div>
        </div>
    );
}

export default Message;