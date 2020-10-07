import { profileAPI } from "../../api/Api";
import { stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "../../Types/Types";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCES = "SAVE_PHOTO_SUCCES";
//initialState


let initialState = {
  posts: [
    {
      id: 1,
      message: "It's Sunny Day",
      likesCount: 10,
      
    },
    {
      id: 2,
      message: "I am fine",
      likesCount: 25,
    },
    {
      id: 3,
      message: "Happy birthday",
      likesCount: 30,
    },
    {
      id: 4,
      message: "Everything is GooD!!!",
      likesCount: 20,
    }
  ] as Array<PostType>,
  profile: null as ProfileType|null,
  status: '',
  
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action:any):InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        message: action.newText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

      // let stateCopy = {...state};
      // if(stateCopy.newText !==''){
      //   stateCopy.posts = [...state.posts];
      //   stateCopy.posts.push(newPost);
      // }
      // stateCopy.newText='';

      // return stateCopy;
    }
    // case UPDATE_POST_TEXT: {
    //   let stateCopy = { ...state };
    //   stateCopy.newText = action.newText;

    //   return stateCopy;
    // }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCES: {
      return {...state,profile:{...state.profile,photos:action.photos} as ProfileType}
    
    }
    default:
      return state;
  }
};

type AddNewPostActionCreatorType={
  type:typeof ADD_POST,
  newText:string
}

export const addNewPostActionCreator = (newText:string):AddNewPostActionCreatorType => {
  return { type: ADD_POST, newText };
};

type DeletePostType={
  type:typeof DELETE_POST,
  postId:number
}
export const deletePost = (postId:number) => {
  return { type: DELETE_POST, postId };
};
// export const updatePostTextActionCreator = (newText) => {
//   return { type: UPDATE_POST_TEXT, action:newText };
// };

type SetUserProfileType ={
  type: typeof SET_USER_PROFILE,
  profile:ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileType => {
  return { type: SET_USER_PROFILE, profile };
};

type SetUserStatusType={
  type:typeof SET_USER_STATUS,
  status:string
}

export const setUserStatus = (status:string):SetUserStatusType => {
  return { type: SET_USER_STATUS, status };
};

type SavePhotoSuccesType={
  type:typeof SAVE_PHOTO_SUCCES,
  photos:PhotosType
}


export const savePhotoSucces = (photos:PhotosType):SavePhotoSuccesType => {
  return { type: SAVE_PHOTO_SUCCES, photos };
};
//Thunk creator

export const getProfile = (userId:number) => async (dispatch:any) => {
  const res = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(res));
};
export const getStatus = (userId:number) => async (dispatch:any) => {
  const res = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(res.data));
};
export const updateStatus = (status:string) => async (dispatch:any) => {
  const res = await profileAPI.updateStatus(status);
  if (res.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
export const savePhoto = (file:any) => async (dispatch:any) => {
  const res = await profileAPI.savePhoto(file);
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSucces(res.data.data.photos));
  }
}


export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
      dispatch(getProfile(userId));
  } else {
      dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
      return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;
