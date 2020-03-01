import React from 'react';
import './css/App.min.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Content from './components/Content/Content';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Navigation friends = {props.state.sideBar.friends}/>
            <div className="content-wrapper">
                <Route exact path='/' component={Content}/>

                <Route path='/dialogs'
                 render={() => 
                 <Dialogs dialogs={props.state.messagesPage.dialogs} 
                 messages={props.state.messagesPage.messages} 
                 />}/>

                <Route path='/content' render = {()=> 
                <Content posts={props.state.profilePage.posts}/>}/>

                <Route path='/music' component={Music}/>
                
                <Route path='/setings' component={Setings}/>
            </div>
        </div>
        </BrowserRouter>
    );
   
}

export default App;
