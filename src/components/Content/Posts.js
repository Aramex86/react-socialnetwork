import React from 'react';
import Post from './Post';

let posts = [
    {id:1,message:'Hello how are you',likesCount:10},
    {id:2,message:'Hello how are you to',likesCount:25},
    {id:3,message:'Happy birthday',likesCount:30},
    {id:4,message:'Hello how are you',likesCount:20},
    {id:4,message:'Hello how are you',likesCount:20},
    {id:4,message:'Hello how are you',likesCount:20}
]

let post = posts.map(p => <Post message={p.message} id={p.id} likes = {p.likesCount}/>);

const Posts = () => {

    return (
            <div className='post__wrapper'>

                {post}
                {/* <Post message={postData[0].message} id={postData[0].id} likes = {postData[0].likesCount}/>
                <Post message={postData[1].message} id={postData[1].id} likes = {postData[1].likesCount}/>
                <Post message={postData[2].message} id={postData[2].id} likes = {postData[2].likesCount}/> */}
                {/* <Post message='HEY how are you?' likes = '11'/>
                <Post message="It's my first post!!!" likes = '10'/> */}
                


                {/* 
                <div className='post__wrapper-post'>
                    <img src='https://randomuser.me/api/portraits/men/40.jpg' alt='avatar'></img>
                    The weather is nice.
                </div> */}
            </div>
    );
}

export default Posts;