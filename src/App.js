import React from 'react';
import './css/App.min.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Profile from './components/Content/Profile';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header />
            <Navigation friends = {props.state.sideBar.friends}/>
            <div className="content-wrapper">
               
                <Route path='/dialogs'
                 render={() => 
                 <Dialogs dialogs={props.state.messagesPage.dialogs} 
                 messages={props.state.messagesPage.messages} 
                 />}/>

                <Route path='/content'
                 render = {()=> 
                <Profile 
                posts={props.state.profilePage}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
                
                />}/>

                <Route path='/music' component={Music}/>
                
                <Route path='/setings' component={Setings}/>
            </div>
        </div>
    );
   
}

export default App;
