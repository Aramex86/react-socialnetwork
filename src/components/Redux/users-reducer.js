import { usersAPI } from "../../api/Api";
import {updateObjectInArray} from '../../utilies/Helpers/objectHelpers';
//Step 4) Create const with type names

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_PREALOADER = "TOGGLE_PREALOADER";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

// Step 1) innitilState
let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

// Step 2) Create Reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users,action.userId,'id',{followed: true})
        /* state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }), */
      };

    case UNFOLLOW:
      return {
        ...state,
        users:updateObjectInArray(state.users,action.userId,'id',{followed: false})
         /* state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }), */
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUserCount: action.count,
      };
    case TOGGLE_PREALOADER:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

//Step 3) Create ActionCreator

export const followSucces = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowSucces = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

// server call AC
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};
export const setTotalUsersCount = (totalUserCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUserCount,
  };
};
export const setPrealoader = (isFetching) => {
  return {
    type: TOGGLE_PREALOADER,
    isFetching: isFetching,
  };
};
export const toggleFollowngProggress = (isFetching, userId) => {
  return {
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

//Thunk creator

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
  //Prealoader
  dispatch(setPrealoader(true));
  dispatch(setCurrentPage(currentPage));
  const res = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setPrealoader(false));
  dispatch(setUsers(res.items));
  dispatch(setTotalUsersCount(res.totalCount));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowngProggress(true, userId));
  const res = await apiMethod(userId);
  if (res.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowngProggress(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  let actionCreator = unfollowSucces;
  followUnfollowFlow(dispatch,userId,apiMethod,actionCreator);
};

export const follow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  let actionCreator = followSucces;
  followUnfollowFlow(dispatch,userId,apiMethod,actionCreator);
};

export default usersReducer;
