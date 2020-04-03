import React from "react";
//mui
import Paper from "@material-ui/core/Paper";
//components
import NextPage from "../NextPage/NextPage";
//redux
import { connect } from "react-redux";
//routing
import { Redirect } from "react-router-dom";

function AdminPageSix(props) {
  if (props.numBeds <= 0) {
    return <Redirect to={`/page/${props.page + 2}`} />;
  }
  return (
    <main className="container">
      <Paper className="intro-paper">
        <h1>Please tell us about each bedroom in your home.</h1>
        <NextPage to={`/page/${props.page + 1}/1`} />
      </Paper>
    </main>
  );
}

const mapStateToProps = state => {
  return {
    numBeds: state.formInfoReducer.numRooms.numBeds
  };
};

export default connect(mapStateToProps)(AdminPageSix);
