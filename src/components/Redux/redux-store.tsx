import { createStore, combineReducers,compose, applyMiddleware } from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMidlleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";



let rootReducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer,
    newsPage:newsReducer,
    music:musicReducer,
});

type RootReducerType = typeof rootReducers; // (globalState: GLOBALSTATE) => GLOBALSTATE

export type AppStateType = ReturnType<RootReducerType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMidlleWare)))

//let store = createStore(reducers,applyMiddleware(thunkMidlleWare));


// @ts-ignore
window.___store__ = store

export default store

