import store from './components/Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


//Rerender UI 


 const renderEntireTree =(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}  dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root'));
   
}

renderEntireTree(store.getState());

store.subscribe(() =>{
    let state = store.getState()

    renderEntireTree(state);

});

//Data





