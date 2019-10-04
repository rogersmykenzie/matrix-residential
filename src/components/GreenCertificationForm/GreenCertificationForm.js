import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function GreenCertificationForm(props) {
    return <h1>Does your property meet any of these green certification?:</h1>
}

export default withSimpleForm(GreenCertificationForm, ["Energy Star Certified", "Green Built N TX", "HERS 0-85", "HERS 101+", "HERS 86-100", "HERS Rated", "LEED Certified", "LEED Gold", "LEED Platinum", "LEED Silver", "NGBP-National Green"], "greenCertificationInfo");
