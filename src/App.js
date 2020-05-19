import React from 'react';
import './css/App.min.css';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavigationContainer from './components/Navigation/NavigationContainer';
//import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Content/Profile';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            <NavigationContainer/>
            <div className="content-wrapper">

                <Route exact path='/content'
                 render = {()=> 
                <Profile /* store={props.store} */
               /*  posts={props.state.profilePage}
                dispatch={props.dispatch} *//>}/>
               
                <Route path='/dialogs'
                 render={() => 
                 <DialogsContainer /* dialogs={props.state.messagesPage.dialogs} 
                 messages={props.state.messagesPage.messages} 
                 dispatch={props.dispatch} */
                 /* store={props.store} */
                 />}/>
              

                <Route path='/music' component={Music}/>
                
                <Route path='/setings' component={Setings}/>
            </div>
        </div>
    );
   
}

export default App;
