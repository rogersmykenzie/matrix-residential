import React from "react";
//mui
import Paper from "@material-ui/core/Paper";
//components
import NextPage from "../NextPage/NextPage";
//redux
import { connect } from "react-redux";
//routing
import { Redirect } from "react-router-dom";

function AdminPageTen(props) {
  if (props.numBathrooms <= 0)
    return <Redirect to={`/page/${props.page + 2}`} />;

  return (
    <main className="container">
      <Paper className="page-two-paper">
        <h1>We will now create an entry for each bathroom in your house.</h1>
        <NextPage to={`/page/${props.page + 1}/1`} />
      </Paper>
    </main>
  );
}

function mapStateToProps(reduxState) {
  const { numFullBath, numHalfBath } = reduxState.formInfoReducer.numRooms;
  return {
    numBathrooms: numFullBath + numHalfBath
  };
}

export default connect(mapStateToProps)(AdminPageTen);
