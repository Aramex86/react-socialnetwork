const ADD_MESSAGE = 'ADD-MESSAGE'; 
const UPDATE_MESSAGE_TEXT ='UPDATE-MESSAGE-TEXT';
//initialState

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Olga',
            img: 'https://randomuser.me/api/portraits/women/88.jpg'
        }, {
            id: 2,
            name: 'Vasea',
            img: 'https://randomuser.me/api/portraits/men/31.jpg'
        }, {
            id: 3,
            name: 'Sveta',
            img: 'https://randomuser.me/api/portraits/women/57.jpg'
        }, {
            id: 4,
            name: 'Misha',
            img: 'https://randomuser.me/api/portraits/men/76.jpg'
        }, {
            id: 5,
            name: 'Slava',
            img: 'https://randomuser.me/api/portraits/men/94.jpg'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hello how are you',
            img: 'https://randomuser.me/api/portraits/men/40.jpg'
        }, {
            id: 2,
            message: 'I am fine!!!',
            img: 'https://randomuser.me/api/portraits/women/88.jpg'

        }, {
            id: 3,
            message: 'Happy birthday',
            img: 'https://randomuser.me/api/portraits/men/40.jpg'

        }, {
            id: 4,
            message: 'Thanks yo!!',
            img: 'https://randomuser.me/api/portraits/women/88.jpg'
        },
    ],
    newAnswer:''
}

 const messagesReducer = (state = initialState,action)=>{
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

export default messagesReducer;
