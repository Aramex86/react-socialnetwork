import { authSet } from "./auth-reducer";

//Step 4) Create const with type names

const SET_INITIALIZED = "SET_INITIALIZED";

// Step 1) innitilState
let initialState = {
  initialized: false,
};

// Step 2) Create Reducer
const appReducer = (state = initialState, action) => {
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

export const initializedSucces = () => ({
  type: SET_INITIALIZED,
});

//Thunk Creator
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authSet());
  //let promise =  dispatch(some promise);
  //let promise =  dispatch(some promise);

  //if have many promise put them in array

  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
};

export default appReducer;
