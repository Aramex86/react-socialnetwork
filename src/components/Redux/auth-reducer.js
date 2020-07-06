import { authAPI } from "../../api/Api";

//Step 4) Create const with type names

const SET_USER_DATA = "SET_USER_DATA";

// Step 1) innitilState
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

// Step 2) Create Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

//Step 3) Create ActionCreator

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

//Thunk Creator
export const authSet = () => {
  return (dispatch) => {
    authAPI.setAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login,true));
      }
    });
  };
};
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(authSet());
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null,null,null,false));
      }
    });
  };
};

export default authReducer;
