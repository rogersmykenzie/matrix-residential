import React from "react";
//redux
import { connect } from "react-redux";

function mapStateToProps(reduxState) {
  return {
    auth: reduxState.userReducer.auth
  };
}
function withAuth(Component) {
  return connect(mapStateToProps)(function(props) {
    console.log(props.auth);
    return <Component {...props} auth={props.auth} />;
  });
}

export default withAuth;
