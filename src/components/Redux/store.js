import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sideBarReducer from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
// const ADD_MESSAGE = 'ADD-MESSAGE'; 
// const UPDATE_MESSAGE_TEXT ='UPDATE-MESSAGE-TEXT';

let store ={
    _state:{
        profilePage: {
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
        },
        messagesPage: {
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
        },
        sideBar: {
            friends: [
                {
                    name: 'Sveta',
                    img: 'https://randomuser.me/api/portraits/women/57.jpg'
                },
                {
                    name: 'Misha',
                    img: 'https://randomuser.me/api/portraits/men/76.jpg'
                },
                {
                    name: 'Olga',
                    img: 'https://randomuser.me/api/portraits/women/88.jpg'
                }
            ]
        }
    },
   
_callSubscriber(){
        console.log('say hi');
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer; //patern  observer //publisher-subscriber
    } ,
    // addPost(){
    //      let newPost = {
    //         id:7,
    //         message: this._state.profilePage.newText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newText ='';
    //     this._callSubscriber(this._state); 
        
    // },
    // updatePostText(newText){
    //      this._state.profilePage.newText = newText;
    //     this._callSubscriber(this._state); 
    // },


    // addMessage(){
    //     const newMessage ={
    //         id:5,
    //         message:this._state.messagesPage.messages.newAnswer,
    //         img:'https://randomuser.me/api/portraits/women/88.jpg'
    //     };
    //     this._state.messagesPage.messages.push(newMessage);
    //     this._state.messagesPage.messages.newAnswer='';
    //     this._callSubscriber(this._state);
    // },

    // onChangeMessage(){
    //     this._state.messagesPage.newAnswer = newAnswer;
    //     this._callSubscriber(this._state); 
    // },

    dispatch(action){
        /* if(action.type === ADD_POST){
            let newPost = {
                id:7,
                message: this._state.profilePage.newText,
                likesCount: 0
            };
            if(this._state.profilePage.newText !==''){
                this._state.profilePage.posts.push(newPost);
            }
            //this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newText='';
            this._callSubscriber(this._state);
            
        }else if(action.type === UPDATE_POST_TEXT){
            this._state.profilePage.newText = action.newText;
            this._callSubscriber(this._state);

        }else if(action.type === UPDATE_MESSAGE_TEXT){
            this._state.messagesPage.newAnswer = action.newAnswer;
            this._callSubscriber(this._state); 
        }else if(action.type === ADD_MESSAGE){
            const newMessage ={
                id:5,
                message:this._state.messagesPage.newAnswer,
                img:'https://randomuser.me/api/portraits/women/88.jpg'
            };
            
            if(this._state.messagesPage.newAnswer !==''){
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newAnswer='';
            }
            this._callSubscriber(this._state);
        } */

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage,action);
        this._state.sideBar = sideBarReducer(this._state.sideBar,action);
        this._callSubscriber(this._state);
    }
}

//ACTION CREATOR

// export  const addNewPostActionCreator = () =>{
//     return { type: ADD_POST}
// };

// export  const updatePostTextActionCreator =(text) => {
//     return{type:UPDATE_POST_TEXT,newText: text}
// };

// export const addNewMessageActionCreator = () =>{
//     return {type: ADD_MESSAGE}
// }

// export const updateMessageTextActionCreator = (text) =>{
//     return{type:UPDATE_MESSAGE_TEXT,newAnswer:text}
// }

export default store;


window.state = store;