//Step 4) Create const with type names

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



// Step 1) innitilState
let initialState = {
    users:[
        {
            id: 1,
            followed:true,
            name: 'Olga',
            img: 'https://randomuser.me/api/portraits/women/88.jpg',
            status:'Hello World!!!',
            location:{
                city:'Kisinev',
                counrty:'Moldova'
            }
        },
        {
            id: 2,
            followed:false,
            name: 'Vasea',
            img: 'https://randomuser.me/api/portraits/men/31.jpg',
            status:'Hi Iam happy today!!!',
            location:{
                city:'Minsk',
                counrty:'Belarus'
            }
        },
        {
            id: 3,
            followed:true,
            name: 'Sveta',
            img: 'https://randomuser.me/api/portraits/women/57.jpg',
            status:'Where are you ALL...',
            location:{
                city:'Moscow',
                counrty:'Russia'
            }
        },
        {
            id: 4,
            followed:false,
            name: 'Slava',
            img: 'https://randomuser.me/api/portraits/men/94.jpg',
            status:'Lets Play',
            location:{
                city:'Kiev',
                counrty:'Ukraine'
            }
        }
    ]
}


// Step 2) Create Reducer
const usersReducer = (state=initialState, action)=>{

    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users:state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user, followed:true}
                    }
                    return user;
                }),
            }

        case UNFOLLOW:
            return{
                ...state,
                users:state.users.map((user) => {
                    if(user.id === action.userId){
                        return {...user, followed:false}
                    }
                    return user;
                }),
            }

        case SET_USERS:
            return{
                ...state,
                users:[...state.users,...action.users]
            }  

        default:
            return state;
    }
}

//Step 3) Create ActionCreator

export const followAC =(userId)=>{
    return{
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId)=>{
    return{
        type: UNFOLLOW,
        userId
    }
}

// server call
 export const setUsersAC = (users) =>{
     return{
         type:SET_USERS,
         users
     }
 }

export default usersReducer;