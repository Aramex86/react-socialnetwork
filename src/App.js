import React from 'react';
import './css/App.min.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Content from './components/Content/Content';

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navigation />
            <div className="content-wrapper">
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/content' component={Content}/>
                
                
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
