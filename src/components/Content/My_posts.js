import React from 'react';
import Posts from './Posts';


const MyPosts = (props) => {
    //let state = props.posts;

    let newText = props.newText;
    
    const onAddPost = (e) => {
        e.preventDefault();
        props.addPost();
       //props.dispatch(addNewPostActionCreator());
    }

    const onChangeText = (e) =>{
        let text = e.target.value;
        props.updatePostText(text);
        //  let action = updatePostTextActionCreator(text)
        //  props.dispatch(action);
    }

    return (
        <div>
            <h2>My Posts</h2>
            <form>
                <textarea value={newText} onChange={ onChangeText }  placeholder='your post here...'/>
                <button className='btn' onClick={ onAddPost }>Add post</button>
            </form>
            <Posts
             posts={props.posts}
            />

        </div>
    );
}

export default MyPosts;
