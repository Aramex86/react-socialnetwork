import React from 'react';






const MyPosts = (props) => {
    return (
        <div>
            <h2>My Posts</h2>
            <form>
                <textarea placeholder='your post here...' draggable='disabled'></textarea>
                <button className='btn'>Send</button>
            </form>
        </div>
    );
}

export default MyPosts;
