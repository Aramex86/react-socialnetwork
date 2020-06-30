import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from "../Redux/profile-reducer";
import { withRouter } from "react-router-dom";
import WithAuthRedirect from "../HOC/WithAuthRedirect";
import { compose } from "redux";

class ContentComponenet extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
    // profileAPI.getProfile(userId)
    // .then(res => {
    //     this.props.setUserProfile(res);
    // });
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
  };
};

// let AuthRedirectComponent = WithAuthRedirect(ContentComponenet);

// let WithRouterDataContainer = withRouter(AuthRedirectComponent);

export default compose(
  withRouter,
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  WithAuthRedirect
)(ContentComponenet);

// connect(mapStateToProps, { getProfile })(WithRouterDataContainer);
