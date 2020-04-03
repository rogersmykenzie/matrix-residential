import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

function KitchenEquipForm(props) {
  //state
  const [selectedEquip, setSelectedEquip] = React.useState([]);
  //event handlers
  function onCheck(option) {
    setSelectedEquip([...selectedEquip, option]);
  }
  function onUncheck(option) {
    let arr = [...selectedEquip];
    arr.splice(arr.indexOf(option), 1);
    setSelectedEquip([...arr]);
  }
  function postInfo() {
    Axios.post("/info", {
      kitchenInfo: {
        selectedTypes: selectedEquip
      }
    });
  }
  //constants
  const kitchenEquipment = [
    "Built-in Coffee Maker",
    "Built-in Compacter",
    "Built-in Icemaker",
    "Built-in Microwave",
    "Built-in Refrig/Freezer",
    "Commercial Grade Range",
    "Commercial Grade Vent",
    "Convection Oven",
    "Cooktop - Electric",
    "Cooktop - Gas",
    "Dishwasher",
    "Disposal",
    "Double Oven",
    "Drop in Range/Oven - Gas",
    "Dryer",
    "Dual Dishwashers",
    "Dual Fuel Range",
    "Indoor Grill",
    "Other",
    "Oven - Electric",
    "Oven - Gas",
    "Plumbed for Gas in Kitchen",
    "Range/Oven - Electric",
    "Range/Oven - Gas",
    "Refrigerator",
    "Vent Mechanism",
    "Warmer Oven Drawer",
    "Washer",
    "Water Line to Refrig",
    "None"
  ];
  //render
  return (
    <Paper className="intro-paper">
      <h1>Select any of the following equipment included with your kitchen:</h1>
      <div className="checkbox__container">
        {kitchenEquipment.map(val => {
          return (
            <CheckboxComp
              label={val}
              whenClicked={onCheck}
              whenUnclicked={onUncheck}
            />
          );
        })}
      </div>
      {selectedEquip.length > 0 ? (
        <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
      ) : null}
    </Paper>
  );
}

export default KitchenEquipForm;
