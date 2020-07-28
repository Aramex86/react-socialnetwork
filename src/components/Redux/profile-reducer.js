import { profileAPI } from "../../api/Api";
import { stopSubmit } from "redux-form";


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
      message: "Hello how are you",
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
      message: "Hello how are you",
      likesCount: 20,
    },
    {
      id: 5,
      message: "Hello how are you",
      likesCount: 20,
    },
    {
      id: 6,
      message: "Hello how are you",
      likesCount: 20,
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
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
      return {
        ...state,
        profile: {...state.profile,photos:action.photos}
      };
    }
    default:
      return state;
  }
};

export const addNewPostActionCreator = (newText) => {
  return { type: ADD_POST, newText };
};

export const deletePost = (postId) => {
  return { type: DELETE_POST, postId };
};
// export const updatePostTextActionCreator = (newText) => {
//   return { type: UPDATE_POST_TEXT, action:newText };
// };
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setUserStatus = (status) => {
  return { type: SET_USER_STATUS, status };
};
export const savePhotoSucces = (photos) => {
  return { type: SAVE_PHOTO_SUCCES, photos };
};
//Thunk creator

export const getProfile = (userId) => async (dispatch) => {
  const res = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(res));
};
export const getStatus = (userId) => async (dispatch) => {
  const res = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(res.data));
};
export const updateStatus = (status) => async (dispatch) => {
  const res = await profileAPI.updateStatus(status);
  if (res.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  const res = await profileAPI.savePhoto(file);
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSucces(res.data.data.photos));
  }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
      dispatch(getProfile(userId));
  } else {
      dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
      //return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;
