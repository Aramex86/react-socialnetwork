const ADD_MESSAGE = 'ADD-MESSAGE'; 
const UPDATE_MESSAGE_TEXT ='UPDATE-MESSAGE-TEXT';

 const dialogsReducer = (state,action)=>{
    switch(action.type){
        case ADD_MESSAGE:
            const newMessage ={
                id:5,
                message:state.newAnswer,
                img:'https://randomuser.me/api/portraits/women/88.jpg'
            };
            
            if(state.newAnswer !==''){
                state.messages.push(newMessage);
                state.newAnswer='';
            }
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newAnswer = action.newAnswer; 
            return state; 
        default:
            return state;   
    }   
}
export const addNewMessageActionCreator = () =>{
    return {type: ADD_MESSAGE}
}

export const updateMessageTextActionCreator = (text) =>{
    return{type:UPDATE_MESSAGE_TEXT,newAnswer:text}
}

export default dialogsReducer;
