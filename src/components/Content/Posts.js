import React from 'react';
import Post from './Post';

const Posts = () => {

    return (
            <div className='post__wrapper'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

                {/* 
                <div className='post__wrapper-post'>
                    <img src='https://randomuser.me/api/portraits/men/40.jpg' alt='avatar'></img>
                    The weather is nice.
                </div> */}
            </div>
    );
}

export default Posts;