import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../Redux/profile-reducer";
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
    // profileAPI.getProfile(userId)
    // .then(res => {
    //     this.props.setUserProfile(res);
    // });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};

// let AuthRedirectComponent = WithAuthRedirect(ContentComponenet);



// let WithRouterDataContainer = withRouter(AuthRedirectComponent);

export default compose(
    withRouter,
    connect(mapStateToProps, { getProfile }),
    WithAuthRedirect
)(ContentComponenet)





// connect(mapStateToProps, { getProfile })(WithRouterDataContainer);
