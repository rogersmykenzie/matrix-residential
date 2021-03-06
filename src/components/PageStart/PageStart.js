import React from "react";
//mui
import Paper from "@material-ui/core/Paper";

function PageStart(props) {
  return (
    <div className="container">
      <Paper className="intro-paper">{props.children}</Paper>
    </div>
  );
}

export default PageStart;
