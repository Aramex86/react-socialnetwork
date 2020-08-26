import { connect } from "react-redux";
import SidebarProfile from "./Navigation";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
 
class ProfileContainer extends Component {
    
  render() {
    return (
      <SidebarProfile
        profile={this.props.profile}
        authUserId={this.props.authUserId}
        sideBar={this.props.sideBar}
        auth={this.props.auth}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    sideBar: state.sideBar,
    profile: state.profilePage.profile,
    auth: state.auth.isAuth,
    users: state.usersPage,
    authUserId: state.auth.userId,
  };
};

export default compose(withRouter, connect(mapStateToProps))(ProfileContainer);
