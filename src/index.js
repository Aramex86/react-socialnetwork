import store from './components/Redux/state';
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

store.subscribe(renderEntireTree);

//Data





