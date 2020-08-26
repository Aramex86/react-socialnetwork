import React from 'react';

const ShortInfo = (props) => {
    console.log(props)
    return (
       <div className='nav__wrapper-header'>
            <img
                src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                alt='img'></img>
            <div className='profile__shortinfo'>
            {props.profile?<img
                    src={props.profile.photos.large}
                    alt='avatar'
                    className='profile__shortinfo-img'/>:''}
                <p>{props.profile?props.profile.fullName:''}</p>
            </div>
        </div>
    )
}

export default ShortInfo;
