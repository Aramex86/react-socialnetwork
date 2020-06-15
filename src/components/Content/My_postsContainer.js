import {addNewPostActionCreator , updatePostTextActionCreator} from '../Redux/profile-reducer';
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
        updatePostText:(text)=>{
            let action = updatePostTextActionCreator(text)
            dispatch(action);
        },
        addPost:()=>{
            dispatch(addNewPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
