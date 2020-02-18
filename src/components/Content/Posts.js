import React from 'react';
import Post from './Post';

const Posts = () => {

    return (
            <div className='post__wrapper'>
                <Post message='Today I fell good' likes = '15'/>
                <Post message='HEY how are you?' likes = '11'/>
                <Post message="It's my first post!!!" likes = '10'/>
                


                {/* 
                <div className='post__wrapper-post'>
                    <img src='https://randomuser.me/api/portraits/men/40.jpg' alt='avatar'></img>
                    The weather is nice.
                </div> */}
            </div>
    );
}

export default Posts;