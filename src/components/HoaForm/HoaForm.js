import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import ColumnPaper from "../ColumnPaper/ColumnPaper";
// import NextPage from "../NextPage/NextPage";
import CheckboxComp from "../CheckboxComp/CheckboxComp";
//mui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//libs
import Axios from "axios";
//routing
import { Redirect } from "react-router-dom";
//inline styles
import { buttonStyleMain } from "../../styles/GlobalStyles";

function HoaForm(props) {
  const [selection, setSelection] = React.useState("");
  const [billingCycle, setBillingCycle] = React.useState("");
  const [hoaDues, setHoaDues] = React.useState("");
  const [managementCompany, setManagementCompany] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [selectedAttributes, setSelectedAttributes] = React.useState([]);
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  //constants
  const attributes = [
    "All Utilities",
    "Back Yard Maintenance",
    "Blanket Insurance",
    "Electric",
    "Exterior Maintenance",
    "Front Yard Maintenance",
    "Full Use of Facilities",
    "Gas",
    "Maintenance of Common Areas",
    "Management Fees",
    "None",
    "Other",
    "Partial Use of Facilities",
    "Reserves",
    "Security",
    "Sprinkler System",
    "Trash",
    "Water/Sewer"
  ];
  const textFieldStyle = {
    width: "30%",
    marginBottom: "3vh"
  };
  //event handlers
  function onCheck(option) {
    setSelectedAttributes([...selectedAttributes, option]);
  }
  function onUncheck(option) {
    let arr = [...selectedAttributes];
    arr.splice(arr.indexOf(option), 1);
    setSelectedAttributes([...arr]);
  }
  function sendInfo() {
    Axios.post("/info", {
      hoaInfo: {
        hasHoa: selection,
        billingCycle,
        hoaDues,
        managementCompany,
        phone,
        selectedAttributes
      }
    }).then(response => {
      setShouldRedirect(true);
    });
  }

  //redirect
  if (shouldRedirect) {
    return <Redirect to={`/page/${props.page + 1}`} />;
  }
  //template
  return (
    <ColumnPaper>
      <h1>Is your HOA...</h1>
      <RadioButtons
        buttons={["Mandatory", "Voluntary", "None"]}
        onSelection={setSelection}
      />
      {selection === "Mandatory" || selection === "Voluntary" ? (
        <>
          <h1>How often is your HOA's billing cycle</h1>
          <RadioButtons
            buttons={["Annual", "Monthly", "Other", "Quarterly", "Semi-Annual"]}
            onSelection={setBillingCycle}
          />
        </>
      ) : null}
      {(selection === "Mandatory" || selection === "Voluntary") &&
      billingCycle !== "" ? (
        <>
          <h1>Please enter any HOA Dues:</h1>
          <TextField
            variant="outlined"
            // placeholder="# of Carport Spaces"
            style={textFieldStyle}
            onChange={e => setHoaDues(e.target.value)}
          />
        </>
      ) : null}
      {(selection === "Mandatory" || selection === "Voluntary") &&
      billingCycle !== "" &&
      hoaDues !== "" ? (
        <>
          <h1>Who is your HOA's Management Company?</h1>
          <TextField
            variant="outlined"
            // placeholder="# of Carport Spaces"
            style={textFieldStyle}
            onChange={e => setManagementCompany(e.target.value)}
          />
        </>
      ) : null}
      {(selection === "Mandatory" || selection === "Voluntary") &&
      billingCycle !== "" &&
      hoaDues !== "" &&
      managementCompany !== "" ? (
        <>
          <h1>Enter a contact phone number for your HOA: </h1>
          <TextField
            variant="outlined"
            // placeholder="# of Carport Spaces"
            type="number"
            style={textFieldStyle}
            onChange={e => setPhone(e.target.value)}
          />
        </>
      ) : null}
      {(selection === "Mandatory" || selection === "Voluntary") &&
      billingCycle !== "" &&
      hoaDues !== "" &&
      managementCompany !== "" &&
      phone !== "" ? (
        <>
          <h1>Select any that apply to your HOA</h1>
          {attributes.map(val => (
            <CheckboxComp
              label={val}
              whenClicked={onCheck}
              whenUnclicked={onUncheck}
            />
          ))}
        </>
      ) : null}
      {selection === "None" || phone !== "" ? (
        <>
          <br />
          <Button
            className="fade-in admin-page-three-button"
            style={{ ...buttonStyleMain, marginTop: "3vh" }}
            onClick={sendInfo}
            variant="contained">
            Next
          </Button>
        </>
      ) : null}
    </ColumnPaper>
  );
}

export default HoaForm;
