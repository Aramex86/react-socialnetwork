import React from 'react';
//import MyPosts from './My_posts';
import MyPostsContainer from './My_postsContainer';


const Content = (props) => {
    return (
        <div className='profile'>
            <div className='profile__header'>
                <img
                    src='https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                    alt='img'></img>
            </div>
            <div className='profile__description'>
                <div className='profile__description-avatar'>
                    <img src="https://randomuser.me/api/portraits/men/40.jpg" alt='avatar'/>
                </div>
                <div className='profile__description-userinfo'>
                    <div className='profile__description-name'>
                        Matej Oliver
                    </div>
                    <div className='profile__description-about'>
                        <ul>
                            <li>date of birth 2 january</li>
                            <li>city: krakov</li>
                            <li>education: unkown</li>
                            <li>web site: unkown</li>
                        </ul>
                    </div>
                </div>
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