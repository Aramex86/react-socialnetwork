import React from 'react';
import {addNewPostActionCreator , updatePostTextActionCreator} from '../Redux/profile-reducer';
import MyPosts from './My_posts';



const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    
    const onAddPost = () => {
        //props.addPost();
       props.store.dispatch(addNewPostActionCreator());
    }

    const onChangeText = (text) =>{
        //props.updatePostText(text);
         let action = updatePostTextActionCreator(text)
         props.store.dispatch(action);
    }

    return <MyPosts addPost={onAddPost} updatePostText={onChangeText} profilePage={state}/>
}

export default MyPostsContainer;
