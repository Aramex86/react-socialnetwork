import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const WithSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};

export default WithSuspense;
