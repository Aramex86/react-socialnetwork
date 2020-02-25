import React from 'react';
import './css/App.min.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Content from './components/Content/Content';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';

const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navigation />
            <div className="content-wrapper">
                <Route exact path='/' component={Content}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/content' component={Content}/>
                <Route path='/music' component={Music}/>
                <Route path='/setings' component={Setings}/>
                
                
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
