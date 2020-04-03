import React from "react";
//components
import forms from "../../modules/FormsModule";
import NextPage from "../NextPage/NextPage";
import SolariumSunroom from "../extraRoomForms/SolariumSunroom";
//redux
import { connect } from "react-redux";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

function ExtraRooms(props) {
  //constants
  let options = [
    "--Select an Option",
    "Master Bedroom",
    // "Guest Bedroom",
    // "Other Bedroom",
    "Dining Room",
    "Kitchen",
    "Breakfast Nook",
    "Full Bathroom",
    "Half Bathroom",
    "Living Room",
    "Game Room",
    "Media Room",
    "Study",
    "Utility Room",
    "Exercise Room",
    "Extra Storage Room",
    "Wine Cellar",
    "Solarium/Sunroom",
    "Other"
  ];
  //state
  const [room, setRoom] = React.useState(null);
  const [changesMade, setChangesMade] = React.useState(false);
  const [selectedRoomType, setSelectedRoomType] = React.useState();
  //refs
  const formRef = React.useRef();
  //effect
  React.useEffect(() => {
    switch (room) {
      case "Master Bedroom":
      case "Guest Bedroom":
      case "Other Bedroom":
        setSelectedRoomType("bedroomData");
        break;
      case "Dining Room":
      case "Kitchen":
      case "Breakfast Nook":
        setSelectedRoomType("diningData");
        break;
      case "Full Bathroom":
      case "Half Bathroom":
        setSelectedRoomType("bathroomData");
        break;
      case "Living Room":
      case "Game Room":
      case "Media Room":
      case "Study":
      case "Utility Room":
        setSelectedRoomType("livingData");
        break;
      default:
        setSelectedRoomType("other");
    }
  }, [room]);
  //event handlers
  function onRoomChange(e) {
    setRoom(e.target.value);
  }
  function reset(data) {
    Axios.post(`/info/${selectedRoomType}`, {
      ...data,
      type: room
        .toLowerCase()
        .split(" ")
        .join("-")
    });
    formRef.current.value = "--Select an Option";
    setRoom("--Select an Option");
    setChangesMade(true);
  }
  //component decider
  const SelectedForm = (function() {
    switch (room) {
      case "Master Bedroom":
        return forms.MasterBedroomType;
      // case "Guest Bedroom":
      //   return forms.GuestBedroomType;
      // case "Other Bedroom":
      //   return forms.OtherBedroomType;
      case "Dining Room":
        return forms.DiningRoomType;
      case "Kitchen":
        return forms.KitchenType;
      case "Breakfast Nook":
        return forms.BreakfastNookType;
      case "Full Bathroom":
        return forms.FullBathroomType;
      case "Half Bathroom":
        return forms.HalfBathroomType;
      case "Living Room":
        return forms.LivingRoom;
      case "Game Room":
        return forms.GameRoom;
      case "Media Room":
        return forms.MediaRoom;
      case "Study":
        return forms.Study;
      case "Utility Room":
        return forms.UtilityRoom;
      case "Other":
        return forms.OtherForm;
      case "Exercise Room":
        return forms.ExerciseRoom;
      case "Extra Storage Room":
        return forms.ExtraStorageRoom;
      case "Wine Cellar":
        return forms.WineCellar;
      case "Solarium/Sunroom":
        return SolariumSunroom;
      default:
        return () => null;
    }
  })();
  //render
  return (
    <Paper className="intro-paper">
      <h1>What kind of room would you like to add?</h1>
      <select onChange={onRoomChange} ref={formRef}>
        {options.map(val => {
          return <option value={val}>{val}</option>;
        })}
      </select>
      <SelectedForm cameFromExtraRoom reset={reset} />
      {props.auth === "a" ? (
        <NextPage
          to="/page/15"
          buttonText={!changesMade ? "Go Back" : "Finish Adding Rooms"}
        />
      ) : (
        <NextPage
          to="/page/14"
          buttonText={!changesMade ? "Go Back" : "Finish Adding Rooms"}
        />
      )}
    </Paper>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.userReducer.auth
  };
}

export default connect(mapStateToProps)(ExtraRooms);
