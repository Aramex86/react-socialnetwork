import React from 'react';

const addNewPost = React.createRef();

const MyPosts = (props) => {

    const addPost = (e) => {
        e.preventDefault();
        let text = addNewPost.current.value;
        alert(text);
    }

    return (
        <div>
            <h2>My Posts</h2>
            <form>
                <textarea ref={addNewPost} placeholder='your post here...'></textarea>
                <button className='btn' onClick={ addPost }>Add post</button>
            </form>
        </div>
    );
}

export default MyPosts;
