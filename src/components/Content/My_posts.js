import React from 'react';
import Posts from './Posts';


const addNewPost = React.createRef();

const MyPosts = (props) => {
    const addPost = (e) => {
        e.preventDefault();
        //props.addpost();
        props.dispatch({type:'ADD-POST'});
    }

    const onChangeText = () =>{
        let text = addNewPost.current.value;
        //props.updatePostText();
        props.dispatch({type:'UPDATE-POST-TEXT',newText: text});
        addNewPost.current.value="";
    }

    return (
        <div>
            <h2>My Posts</h2>
            <form>
                <textarea ref={addNewPost} onChange={ onChangeText } value={props.newText} placeholder='your post here...'/ >
                <button className='btn' onClick={ addPost }>Add post</button>
            </form>
            <Posts
             posts={props.posts}
            />

        </div>
    );
}

export default MyPosts;
