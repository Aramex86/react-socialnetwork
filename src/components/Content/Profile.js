import React from 'react';
//import MyPosts from './My_posts';
import MyPostsContainer from './My_postsContainer';
import ProfileInfo from './ProfileInfo';
import UserInfo from './UserProfile';


const Content = (props) => {
    return (<div>
        
            <div className='profile'>
               {/*  <ProfileInfo/> */}
               <UserInfo profile={props.profile}/>
            </div>
            <div className='profile__posts'>
                <MyPostsContainer /* store={props.store} */ /* posts={props.posts}
                newText={props.posts.newText}
                dispatch={props.dispatch} */
                /> 
            </div>
            </div>
    );
}

export default Content;