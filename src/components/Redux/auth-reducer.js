//Step 4) Create const with type names

const SET_USER_DATA = 'SET_USER_DATA';




// Step 1) innitilState
let initialState = {
    userId: null,
    email:null,
    login:null,
    isAuth:false
    
}


// Step 2) Create Reducer
const authReducer = (state=initialState, action)=>{

    switch(action.type){
        case SET_USER_DATA:
            return{
              ...state,
              ...action.data,
              isAuth:true
            }
        default:
            return state;
    }
}

//Step 3) Create ActionCreator
 
 export const setAuthUserData = (userId,email,login) =>({type:SET_USER_DATA,data:{userId,email,login}})
    

export default authReducer;