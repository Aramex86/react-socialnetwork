import React from 'react';

const Post = (props) => {
    return (
        <div className='post'>
            <img src='https://randomuser.me/api/portraits/men/40.jpg' alt='avatar'></img>
            {props.message}

            <span className="post__likes">
              Likes: {props.likes}
            </span>
        </div>

    );
}

export default Post;