const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
//initialState

let initialState =  {
    posts: [
        {
            id: 1,
            message: 'Hello how are you',
            likesCount: 10
        }, {
            id: 2,
            message: 'I am fine',
            likesCount: 25
        }, {
            id: 3,
            message: 'Happy birthday',
            likesCount: 30
        }, {
            id: 4,
            message: 'Hello how are you',
            likesCount: 20
        }, {
            id: 5,
            message: 'Hello how are you',
            likesCount: 20
        }, {
            id: 6,
            message: 'Hello how are you',
            likesCount: 20
        }

    ],
    newText: ''
}

 const profileReducer = (state = initialState,action)=>{
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