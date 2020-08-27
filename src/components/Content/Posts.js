import React,{useEffect, useState} from 'react';
import Post from './Post';

const Posts = ({profile,authUserId,...props}) => {

    const[userProfile,setUserProfile]=useState(profile);

    useEffect(()=>{
     if(profile){
         setUserProfile(profile.userId);
     }
    },[profile]);



    let postElem = props.posts.map( (p,index) => <Post key={index} message={p.message} id={p.id} likes={p.likesCount} profile={profile}/>);
    return (
        <div className='post__wrapper'>
           {userProfile !== authUserId?"":postElem}
        </div>
    );
}
export default Posts;