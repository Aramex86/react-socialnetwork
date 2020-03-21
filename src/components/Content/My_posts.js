import React from 'react';
import Posts from './Posts';


const addNewPost = React.createRef();

const MyPosts = (props) => {
    const addPost = (e) => {
        e.preventDefault();
        props.addPost();
    }

    const onChangeText = () =>{
        let text = addNewPost.current.value;
        props.updatePostText(text);
        addNewPost.current.value="";
        
    }

    return (
        <div>
            <h2>My Posts</h2>
            <form>
                <textarea ref={addNewPost} onChange={onChangeText} value={props.newText} placeholder='your post here...'/ >
                <button className='btn' onClick={ addPost }>Add post</button>
            </form>
            <Posts
             posts={props.posts}
            />

        </div>
    );
}

export default MyPosts;
