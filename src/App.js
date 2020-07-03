import React from 'react';
import './SASS/App.scss';
import { Route } from 'react-router-dom';

import NavigationContainer from './components/Navigation/NavigationContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import AllUsersContainer  from './components/All_Users/All_UsersContainer';
import Setings from './components/Setings/Setings';
import ProfileContainer from './components/Content/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer />
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
                <Route path='/login' component={Login}/>

            </div>
        </div>
    );
   
}

export default App;
