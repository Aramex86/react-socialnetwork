import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { addPosts } from './components/Redux/state';

//Rerender UI 


export const renderEntireTree =(state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPosts={addPosts}/>
        </BrowserRouter>, document.getElementById('root'));
   
}


