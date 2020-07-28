import { authAPI } from "../../api/Api";
import { securityApi } from "../../api/Api";
import { stopSubmit } from "redux-form";

//Step 4) Create const with type names

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCES = "social-network/auth/GET_CAPTCHA_URL_SUCCES";

// Step 1) innitilState
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

// Step 2) Create Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCES:
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
export const getCaptchaUrlSucces = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCES,
  payload: { captchaUrl },
});

//Thunk Creator
export const authSet = () => async (dispatch) => {
  const response = await authAPI.setAuth();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login = (email, password, rememberMe,captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe,captcha);
  if (response.data.resultCode === 0) {
    dispatch(authSet());
  } else {
    if(response.data.resultCode === 10){
      dispatch(getCaptchaUrl());
    }
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));

  }

    
};
export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityApi.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSucces(captchaUrl));
};

export default authReducer;
//securityApi
