import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedidect = (state) => {
  return { isAuth: state.auth.isAuth };
};

const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;

      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedidect)(
    RedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};

export default WithAuthRedirect;
