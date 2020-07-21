import React, { Component } from "react";
import "./SASS/App.scss";
import { Route } from "react-router-dom";
import { initializeApp } from "./components/Redux/app-reducer";
import { connect } from "react-redux";

import NavigationContainer from "./components/Navigation/NavigationContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
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

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
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
          <Route
            path="/content/:userId?"
            render={WithSuspense(ProfileContainer)}
          />

          <Route
            path="/dialogs"
            render={WithSuspense(DialogsContainer)}
          />

          <Route path="/news" component={News} />

          <Route path="/music" component={Music} />

          <Route path="/allusers" render={() => <AllUsersContainer />} />

          <Route path="/setings" component={Setings} />
          <Route path="/login" component={Login} />
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
