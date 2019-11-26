import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import ColumnPaper from "../ColumnPaper/ColumnPaper";
import NextPage from "../NextPage/NextPage";
import Axios from "axios";

function HoaForm(props) {
  const [selection, setSelection] = React.useState("");

  return (
    <ColumnPaper>
      <h1>Does your propery have an HOA?</h1>
      <RadioButtons buttons={["Yes", "No"]} onSelection={setSelection} />
      <NextPage to={`/page/${props.page + 1}`} />
    </ColumnPaper>
  );
}

export default HoaForm;
