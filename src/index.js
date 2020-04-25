import state, { subscribe } from './components/Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { addPost } from './components/Redux/state';
import { updatePostText } from './components/Redux/state';


//Rerender UI 


 const renderEntireTree =(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>, document.getElementById('root'));
   
}

renderEntireTree(state);

subscribe(renderEntireTree);

//Data





