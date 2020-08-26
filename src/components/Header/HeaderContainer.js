import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../Redux/auth-reducer";
import {compose} from 'redux';
import { withRouter } from "react-router";

class HeaderContainer extends React.Component {
  render(){
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile:state.profilePage.profile,
  authUserId: state.auth.userId
});

export default compose(
  withRouter,
  connect(mapStateToProps, { logout }),
) (HeaderContainer)
