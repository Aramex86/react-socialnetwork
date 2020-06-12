import { createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth:authReducer
});

let store = createStore(reducers);



window.store = store;

export default store;