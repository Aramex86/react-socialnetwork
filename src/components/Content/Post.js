import React from 'react';

const Post = ({profile,...props}) => {
    return (
        <div className='post'>
            {profile?<img src={profile.photos.small} alt='avatar'/> : null}
            {props.message}

            <span className="post__likes">
              Likes: {props.likes}
            </span>
        </div>

    );
}

export default Post;