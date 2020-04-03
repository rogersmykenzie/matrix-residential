import React from "react";
//mui
import Paper from "@material-ui/core/Paper";

function ColumnPaper(props) {
  return <Paper className="intro-paper">{props.children}</Paper>;
}

export default ColumnPaper;
