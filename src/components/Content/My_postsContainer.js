import {addNewPostActionCreator } from '../Redux/profile-reducer';
import MyPosts from './My_posts';
import { connect } from 'react-redux';




let mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.posts,
        // newText : state.profilePage.newText,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        // updatePostText:(newText)=>{
        //     let action = updatePostTextActionCreator(newText)
        //     dispatch(action);
        // },
        addPost:(newText)=>{
            dispatch(addNewPostActionCreator(newText));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
