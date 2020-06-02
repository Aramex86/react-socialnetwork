import React from 'react';
import './css/App.min.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavigationContainer from './components/Navigation/NavigationContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import AllUsersContainer  from './components/All_Users/All_UsersContainer';
import Setings from './components/Setings/Setings';
import ProfileContainer from './components/Content/ProfileContainer';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavigationContainer/>
            <div className="content-wrapper">

                <Route  path='/content/:userId?'
                 render = {()=> 
                <ProfileContainer />}/>
               
                <Route path='/dialogs'
                 render={() => 
                 <DialogsContainer /* dialogs={props.state.messagesPage.dialogs} 
                 messages={props.state.messagesPage.messages} 
                 dispatch={props.dispatch} */
                 /* store={props.store} */
                 />}/>

                <Route path='/news' component={News}/>

                <Route path='/music' component={Music}/>

                <Route path='/allusers'
                render={() => <AllUsersContainer/>}/>
                
                <Route path='/setings' component={Setings}/>
            </div>
        </div>
    );
   
}

export default App;
