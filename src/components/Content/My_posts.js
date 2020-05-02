import React from 'react';
import Posts from './Posts';
import {addNewPostActionCreator , updatePostTextActionCrator} from '../Redux/state';




const addNewPost = React.createRef();

const MyPosts = (props) => {
    const addPost = (e) => {
        e.preventDefault();
        //props.addpost();
        props.dispatch(addNewPostActionCreator());
    }

    const onChangeText = () =>{
        let text = addNewPost.current.value;
        //props.updatePostText();

        let action = updatePostTextActionCrator(text)
        props.dispatch(action);
    }

    return (
        <div>
            <h2>My Posts</h2>
            <form>
                <textarea ref={addNewPost} onChange={ onChangeText } value={props.newText} placeholder='your post here...'/>
                <button className='btn' onClick={ addPost }>Add post</button>
            </form>
            <Posts
             posts={props.posts}
            />

        </div>
    );
}

export default MyPosts;
