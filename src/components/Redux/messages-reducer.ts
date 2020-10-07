const ADD_MESSAGE = 'ADD-MESSAGE'; 
//initialState


type Dialogs ={
    id:number
    name:string
    img:string
} 

type Messages={
    id:number
    message:string
    img:string
}

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
        },
        
    ] as Array<Dialogs>,
    messages: [
        {
            id: 1,
            message: 'Hello how are you',
            img: 'https://randomuser.me/api/portraits/men/17.jpg'
        }, {
            id: 2,
            message: 'I am fine!!!',
            img: 'https://randomuser.me/api/portraits/women/88.jpg'

        }, {
            id: 3,
            message: 'Happy birthday',
            img: 'https://randomuser.me/api/portraits/men/17.jpg'

        }, {
            id: 4,
            message: 'Thanks yo!!',
            img: 'https://randomuser.me/api/portraits/women/88.jpg'
        },
    ]as Array<Messages>,
    newAnswer:''
}

export type InitialStateType = typeof initialState

 const messagesReducer = (state = initialState,action:any):InitialStateType=>{
    switch(action.type){
        case ADD_MESSAGE:{
            const newMessage ={
                id:5,
                message:action.newAnswer,
                img:'https://randomuser.me/api/portraits/women/88.jpg'
            };
            return{
                ...state,
                //newAnswer:'',
                messages:[...state.messages,newMessage]
            }

            // // поверхностная копия
            // let stateCopy = {...state}
            
            // if(stateCopy.newAnswer !==''){
            //     //глубокая копия
            //     stateCopy.messages = [...state.messages];
            //     stateCopy.messages.push(newMessage);
            //     stateCopy.newAnswer='';
            // }
            // return stateCopy;
        }
        
        default:
            return state;   
    }   
}

type addNewMessageActionCreatorType={
    type:typeof ADD_MESSAGE,
    newAnswer:string
} 

export const addNewMessageActionCreator = (newAnswer:string):addNewMessageActionCreatorType =>{
    return {type: ADD_MESSAGE , newAnswer}
}



export default messagesReducer;
