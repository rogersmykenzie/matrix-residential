import React, { useState, useEffect } from "react";
//mui
import Paper from "@material-ui/core/Paper";
//css
import "./PageOne.css";
//redux
import { setCurrentPage } from "../../redux/userReducer";
import {
  removeHomeStyle,
  addHomeStyle,
  removeHousingType,
  addHousingType,
  removePropertyType,
  addPropertyType
} from "../../redux/formInfoReducer";
import { connect } from "react-redux";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import RadioButtons from "../RadioButtons/RadioButtons";
//routing
import NextPage from "../NextPage/NextPage";
//fetch
import axios from "axios";

const PageOne = props => {
  const [numPickedFirstAnswer, setFirst] = useState(false); //A counter to make sure they checked at least one property type
  const [numPickedSecondAnswer, setSecond] = useState(false); //A counter to make sure they checked at least one housing type
  const [propertyType, setPropertyType] = useState([]);
  const [housingType, setHousingType] = useState([]);
  const [homeStyles, setHomeStyles] = useState([]);

  //pass down functions for CheckboxComp
  const setPicked = property => {
    //Increments the first counter and adds property type to store
    setPropertyType([...propertyType, property]);
    setFirst(numPickedFirstAnswer + 1);
    props.addPropertyType(property);
  };

  const unPicked = property => {
    //Decrements first counter and removes property type from store
    let arr = [...propertyType];
    arr.splice(arr.indexOf(property), 1);
    setPropertyType(arr);
    setFirst(numPickedFirstAnswer - 1);
    props.removePropertyType(property);
  };

  const setPicked2 = type => {
    //Increments second counter and adds property type to store
    setHousingType([...housingType, type]);
    setSecond(numPickedSecondAnswer + 1);
    props.addHousingType(type);
  };

  const unPicked2 = type => {
    //Decrements second counter and removes property type from store
    let arr = [...housingType];
    arr.splice(arr.indexOf(type), 1);
    setHousingType(arr);
    setSecond(numPickedSecondAnswer - 1);
    props.removeHousingType(type);
  };

  const setPicked3 = style => {
    props.addHomeStyle(style);
    setHomeStyles([...homeStyles, style]);
  };

  const setUnpicked3 = style => {
    props.removeHomeStyle(style);
    let arr = [...homeStyles];
    arr.splice(arr.indexOf(style), 1);
    setHomeStyles(arr);
  };

  const sendData = () => {
    axios.post("/info", {
      propertyType,
      housingType,
      homeStyles
    });
  };

  //update page in nav - may remove. two sources of truth
  useEffect(() => {
    props.setCurrentPage(1);
  }, []);

  //req info
  const propertyTypes = [
    "Condo",
    "Farm/Ranch",
    "Half Duplex",
    <>
      Single Family<span style={{ fontSize: ".5em" }}> (Most Common)</span>
    </>,
    "Townhouse"
  ];
  const housingTypes = [
    "Apartment",
    "Attached or 1/2 duplex",
    "Condo/Townhome",
    "Designated Historical Home",
    "Doublewide Mobile w/ Land",
    "Farm/Ranch House",
    "Garden/Zero Lot Line",
    "Hi Rise",
    "Historical/Conservation Dist.",
    "Interval Ownership",
    "Lake House",
    "Log Cabin",
    "Manufacture (cert exch)",
    "Resort Property",
    <>
      Single Detached<span style={{ fontSize: ".5em" }}> (Most Common)</span>
    </>,
    "Single Mobile w/ Land",
    "Underground",
    "Vacation Home"
  ];
  const optionalHousingStyles = [
    "A-Frame",
    "Colonial",
    "Contemporary/Modern",
    "Craftman",
    "Early American",
    "English",
    "French",
    "Geo/Dome",
    "Loft",
    "Mediterranean",
    "Mid-Century Modern",
    "Oriental",
    "Other",
    "Prairie",
    "Ranch",
    "Southwestern",
    "Spanish",
    "Split Level",
    "Studio",
    <>
      Traditional<span style={{ fontSize: ".5em" }}> (Most Common)</span>
    </>,
    "Tudor",
    "Victorian"
  ];

  return (
    <div className="container">
      <Paper className="page-one-paper">
        <div className="fade-in">
          <h1>Which property type best describes your property?</h1>
          <RadioButtons buttons={propertyTypes} onSelection={setPicked} />
        </div>
        {/* Checks to make sure that a first answer was picked before rendering */}
        {numPickedFirstAnswer ? (
          <div className="fade-in">
            <h1>Select any home styles that describe your home:</h1>
            {housingTypes.map(val => {
              return (
                <CheckboxComp
                  label={val}
                  whenClicked={type => setPicked2(type)}
                  whenUnclicked={type => unPicked2(type)}
                />
              );
            })}
          </div>
        ) : null}

        {/* Checks to make sure a second answer was picked before rendering */}
        {numPickedSecondAnswer && numPickedFirstAnswer ? (
          <div className="fade-in">
            <h1>Select any home styles that apply</h1>
            {optionalHousingStyles.map(val => {
              return (
                <CheckboxComp
                  label={val}
                  whenClicked={setPicked3}
                  whenUnclicked={setUnpicked3}
                />
              );
            })}
          </div>
        ) : null}

        {numPickedSecondAnswer && numPickedFirstAnswer ? (
          <NextPage to={`/page/${props.page + 1}`} whenClicked={sendData} />
        ) : null}
      </Paper>
    </div>
  );
};

export default connect(
  undefined,
  {
    setCurrentPage,
    addPropertyType,
    removePropertyType,
    addHousingType,
    addHomeStyle,
    removeHomeStyle,
    removeHousingType
  }
)(PageOne);
