import { authAPI } from "../../api/Api";
import { securityApi } from "../../api/Api";
import { stopSubmit } from "redux-form";

//Step 4) Create const with type names

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCES = "social-network/auth/GET_CAPTCHA_URL_SUCCES";

// export type InitialStateType={
//   userId:number| null,
//   email:string| null,
//   login:string| null,
//   isAuth: boolean,
//   captchaUrl: string|null,
// }


// Step 1) innitilState
let initialState = {
  userId: null as number|null,
  email: null as string|null,
  login: null as string|null,
  isAuth: false as boolean,
  captchaUrl: null as string|null,
};

export type InitialStateType = typeof initialState;

// Step 2) Create Reducer
const authReducer = (state = initialState, action:any):InitialStateType => {
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
type SetAuthUserDataPayloadType={
  userId:number|null
  email:string|null
  login:number|null
  isAuth:boolean
}


type SetAuthUserDataType={
  type:typeof SET_USER_DATA,
  payload:SetAuthUserDataPayloadType
}


export const setAuthUserData = (userId:number|null, email:string|null, login:number|null, isAuth:boolean):SetAuthUserDataType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccesType={
  type:typeof GET_CAPTCHA_URL_SUCCES,
  payload:{captchaUrl:string}
}

export const getCaptchaUrlSucces = (captchaUrl:string) => ({
  type: GET_CAPTCHA_URL_SUCCES,
  payload: { captchaUrl },
});

//Thunk Creator
export const authSet = () => async (dispatch:any) => {
  const response = await authAPI.setAuth();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};



export const login = (email:string, password:number, rememberMe:boolean,captcha:string) => async (dispatch:any) => {
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
export const logout = () => async (dispatch:any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async (dispatch:any) => {
  const response = await securityApi.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSucces(captchaUrl));
};

export default authReducer;
//securityApi
