import React from "react";
import Prealoader from '../common/Prealoder/Prealoder'

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
