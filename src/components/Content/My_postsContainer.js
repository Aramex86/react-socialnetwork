import {addNewPostActionCreator } from '../Redux/profile-reducer';
import MyPosts from './My_posts';
import { connect } from 'react-redux';



/* const MyPostsContainer = (props) => {
    //let state = props.store.getState().profilePage;
    return( 
    <SrotreContext.Consumer>
        {(store) => {
            let state = store.getState().profilePage;

            const onAddPost = () => {
                //props.addPost();
               store.dispatch(addNewPostActionCreator());
            }
        
            const onChangeText = (text) =>{
                //props.updatePostText(text);
                 let action = updatePostTextActionCreator(text)
                 store.dispatch(action);
            }

            return <MyPosts 
                    addPost={onAddPost} 
                    updatePostText={onChangeText}
                     profilePage={state}/>
       
        } 
     }
     </SrotreContext.Consumer>)
} */

let mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.posts,
        newText : state.profilePage.newText,
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
