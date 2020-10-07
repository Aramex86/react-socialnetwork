import { authSet } from "./auth-reducer";

//Step 4) Create const with type names

const SET_INITIALIZED = "SET_INITIALIZED";

//TS define the type

export type InitializeStateType={
  initialized: boolean,
}


// Step 1) innitilState
let initialState:InitializeStateType = {
  initialized: false,
};

// Step 2) Create Reducer
const appReducer = (state = initialState, action:any):InitializeStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

//Step 3) Create ActionCreator
export type InitializedSuccesActiontype={
  type:typeof SET_INITIALIZED
}


export const initializedSucces = ():InitializedSuccesActiontype => ({
  type: SET_INITIALIZED
});

//Thunk Creator
export const initializeApp = () => (dispatch:any) => {
  let promise = dispatch(authSet());
  //let promise =  dispatch(some promise);
  //let promise =  dispatch(some promise);

  //if have many promise put them in array

  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
};

export default appReducer;
