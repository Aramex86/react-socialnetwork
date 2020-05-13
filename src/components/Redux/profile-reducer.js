const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

 const profileReducer = (state,action)=>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:7,
                message: state.newText,
                likesCount: 0
            };
            if(state.newText !==''){
                state.posts.push(newPost);
            }
            state.newText='';
            return state;
        case UPDATE_POST_TEXT:

                state.newText = action.newText;
                return state;
        default:
            return state;
    }
}



export  const addNewPostActionCreator = () =>{
    return { type: ADD_POST}
};

export  const updatePostTextActionCreator =(text) => {
    return{type:UPDATE_POST_TEXT,newText: text}
};

export default profileReducer;