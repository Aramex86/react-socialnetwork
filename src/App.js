import React, { Component } from "react";
import "./SASS/App.scss";
import { Route,Switch, Redirect } from "react-router-dom";
import { initializeApp } from "./components/Redux/app-reducer";
import { connect } from "react-redux";

import NavigationContainer from "./components/Navigation/NavigationContainer";
import MusicContainer from "./components/Music/MusicContainer";
//import NewsConatiner from "./components/News/NewsContainer";
import AllUsersContainer from "./components/All_Users/All_UsersContainer";
import Setings from "./components/Setings/Setings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Prealoder from "./components/common/Prealoder/Prealoder";
import { compose } from "redux";
import WithSuspense from "./components/HOC/WithSuspense";

//Lazy Loading
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
//import ProfileContainer from "./components/Content/ProfileContainer";
const ProfileContainer = React.lazy(() =>
  import("./components/Content/ProfileContainer")
);
const NewsConatiner = React.lazy(() =>
  import("./components/News/NewsContainer")
);

class App extends Component {
  
  catchAllUnhandleErrors=(promiseRejectionEvent)=>{
    alert('some error');
    console.error(promiseRejectionEvent);
};
  componentDidMount() {    
    this.props.initializeApp();
    window.addEventListener('unhandledrejection',this.catchAllUnhandleErrors);
  }
  componentWillMount(){
    window.removeEventListener('unhandledrejection',this.catchAllUnhandleErrors);

  }

  render() {
    
    if (!this.props.initialized) {
      return <Prealoder />;
    }
   

    return (
      
      <div className="app-wrapper">
         <HeaderContainer />
        <NavigationContainer />
        
        <div className="content-wrapper">
          {/* <Route
            path="/content/:userId?"
            render={() => {
              return (
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ProfileContainer />
                </React.Suspense>
              );
            }}
          /> */}
          <Switch>
          
          <Route
           exact path="/"
            render={()=><Redirect to='/content'/>}
          />
         
          <Route
            path="/content/:userId?"
            render={WithSuspense(ProfileContainer)}
          />
         
          <Route
            path="/dialogs"
            render={WithSuspense(DialogsContainer)}
          />

          <Route path="/news"
           render={WithSuspense(NewsConatiner)} />

          <Route path="/music" 
            render={()=><MusicContainer/>}
          />

          <Route path="/allusers" render={() => <AllUsersContainer title={'Users'}/>} />

          <Route path="/setings" component={Setings} />
          <Route path="/login" component={Login} />
          <Route path="*" render={()=><div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  
});

export default compose(
  //withRouter ,
  connect(mapStateToProps, { initializeApp })(App)
);
