import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function RestrictionsForm(props) {
  return <h1>Select any restrictions that your property has:</h1>;
}

export default withSimpleForm(
  RestrictionsForm,
  [
    "Agricultural",
    "Animals",
    "Architectural",
    "Building",
    "Deed",
    "Development",
    "Easement(s)",
    "Health Department",
    "Hi Line",
    "Inland - Wetland Restr",
    "Lease While on Market",
    "Mobile Home",
    "No Divide",
    "No Known Restriction(s)",
    "No Livestock",
    "No Mobile Home",
    "No Pets",
    "No Restrictions",
    "No Smoking",
    "No Sublease",
    "No Waterbeds",
    "Other",
    "Pet Restrictions",
    "Pipeline",
    "Surface Lease(s)",
    "Timber Lease(s)",
    "Unknown Encumbrance(s)",
    "None"
  ],
  "restrictionsInfo"
);
