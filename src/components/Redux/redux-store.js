import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMidlleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});

let store = createStore(reducers,applyMiddleware(thunkMidlleWare));



window.store = store;

export default store;