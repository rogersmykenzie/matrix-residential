import React from "react";
//components
import GuestBedroomType from "../GuestBedroomType_DEPRECATED/GuestBedroomType";

function OtherBedroomTypes(props) {
  return <GuestBedroomType {...props} bedroomType="other" />;
}

export default OtherBedroomTypes;
