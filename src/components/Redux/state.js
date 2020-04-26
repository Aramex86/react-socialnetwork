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
                }
            ]
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
    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost = {
                id:7,
                message: this._state.profilePage.newText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newText ='';
            this._callSubscriber(this._state);
        }else if(action.type === 'UPDATE-POST-TEXT'){
            this._state.profilePage.newText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;


window.state = store;