import React from 'react';
import Post from './Post';

const Posts = ({profile,...props}) => {
    let postElem = props.posts.map( (p,index) => <Post key={index} message={p.message} id={p.id} likes={p.likesCount} profile={profile}/>);
    return (
        <div className='post__wrapper'>
            {postElem}
        </div>
    );
}
export default Posts;