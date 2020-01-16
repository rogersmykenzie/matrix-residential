import React from "react";
import "./TextAreaComp.css";

function TextAreaComp(props) {
  //event handlers
  function onChange(e) {
    props.onChange(e.target.value);
  }
  //template
  return (
    <textarea className="aiden__inspired__text__area" onChange={onChange} />
  );
}

export default TextAreaComp;
