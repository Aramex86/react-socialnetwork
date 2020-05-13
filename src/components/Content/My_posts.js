import React from 'react';
import Posts from './Posts';
import {addNewPostActionCreator , updatePostTextActionCreator} from '../Redux/profile-reducer';





const MyPosts = (props) => {
    
    let newText = props.newText;
    
    const addPost = (e) => {
        e.preventDefault();
        //props.addpost();
        props.dispatch(addNewPostActionCreator());
    }

    const onChangeText = (e) =>{
        let text = e.target.value;
        //props.updatePostText();

        let action = updatePostTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div>
            <h2>My Posts</h2>
            <form>
                <textarea value={newText} onChange={ onChangeText }  placeholder='your post here...'/>
                <button className='btn' onClick={ addPost }>Add post</button>
            </form>
            <Posts
             posts={props.posts}
            />

        </div>
    );
}

export default MyPosts;
