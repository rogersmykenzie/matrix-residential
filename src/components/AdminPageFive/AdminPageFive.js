import React, { useReducer, useState } from "react";
//css
import "./AdminPageFive.css";
//mui
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
//components
import NextPage from "../NextPage/NextPage";
import useWindowSize from "../../utils/useWindowSize";
//redux
import { updateNumRooms } from "../../redux/formInfoReducer";
import { connect } from "react-redux";
//tooltips
import Popup from "reactjs-popup";
import Tooltip from "../Tooltip/Tooltip";
import Axios from "axios";

function AdminPageFive(props) {
  const [rooms, dispatch] = useReducer(
    function(state, action) {
      switch (action.type) {
        case "UPDATE_BEDS":
          return {
            ...state,
            numBeds: action.payload
          };
        case "UPDATE_DINING":
          return {
            ...state,
            numDining: action.payload
          };
        case "UPDATE_FULL_BATH":
          return {
            ...state,
            numFullBath: action.payload
          };
        case "UPDATE_HALF_BATH":
          return {
            ...state,
            numHalfBath: action.payload
          };
        case "UPDATE_LIVING":
          return {
            ...state,
            numLiving: action.payload
          };
        case "UPDATE_STORIES":
          return {
            ...state,
            numStories: action.payload
          };
        default:
          return state;
      }
    },
    {
      numBeds: null,
      numFullBath: null,
      numHalfBath: null,
      numDining: null,
      numLiving: null
    }
  );

  const [width] = useWindowSize();

  function postInfo() {
    Axios.post("/info", {
      rooms
    });
  }

  return (
    <main className="container">
      <Paper className="intro-paper">
        <div className="fade-in">
          <h1>
            How many
            <Popup
              trigger={<span className="tooltip-trigger"> bedrooms </span>}
              position={width <= 500 ? "center" : "right top"}
              on={width <= 1000 ? "click" : "hover"}>
              <Tooltip>This includes any master/guest bedrooms.</Tooltip>
            </Popup>
            does this property have?
          </h1>
          <Input
            type="number"
            startAdornment={
              <i className="fas fa-bed" style={{ width: "30px" }}></i>
            }
            onChange={e =>
              dispatch({ type: "UPDATE_BEDS", payload: +e.target.value })
            }
          />
        </div>
        {rooms.numBeds !== null ? (
          <div className="fade-in">
            <h1>
              How many
              <Popup
                trigger={
                  <span className="tooltip-trigger"> dining areas? </span>
                }
                position={width <= 500 ? "center" : "right top"}
                on={width <= 1000 ? "click" : "hover"}>
                <Tooltip>
                  This includes breakfast nooks and dining rooms.
                </Tooltip>
              </Popup>
            </h1>
            <Input
              type="number"
              startAdornment={
                <i className="fas fa-utensils" style={{ width: "30px" }}></i>
              }
              onChange={e =>
                dispatch({ type: "UPDATE_DINING", payload: +e.target.value })
              }
            />
          </div>
        ) : null}
        {rooms.numDining !== null ? (
          <div className="fade-in">
            <h1>
              How many
              <Popup
                trigger={
                  <span className="tooltip-trigger"> full bathrooms? </span>
                }
                position={width <= 500 ? "center" : "right top"}
                on={width <= 1000 ? "click" : "hover"}>
                <Tooltip>
                  A full bathroom has a shower, bathtub, toilet, and sink
                </Tooltip>
              </Popup>
            </h1>
            <Input
              type="number"
              startAdornment={
                <i className="fas fa-shower" style={{ width: "30px" }}></i>
              }
              onChange={e =>
                dispatch({ type: "UPDATE_FULL_BATH", payload: +e.target.value })
              }
            />
          </div>
        ) : null}
        {rooms.numFullBath !== null ? (
          <div className="fade-in">
            <h1>
              How many
              <Popup
                trigger={
                  <span className="tooltip-trigger"> half bathrooms? </span>
                }
                position={width <= 500 ? "center" : "right top"}
                on={width <= 1000 ? "click" : "hover"}>
                <Tooltip>A half bathroom has just a toilet and sink</Tooltip>
              </Popup>
            </h1>
            <Input
              type="number"
              startAdornment={
                <i className="fas fa-shower" style={{ width: "30px" }}></i>
              }
              onChange={e =>
                dispatch({ type: "UPDATE_HALF_BATH", payload: +e.target.value })
              }
            />
          </div>
        ) : null}
        {rooms.numHalfBath !== null ? (
          <div className="fade-in">
            <h1>
              How many
              <Popup
                trigger={
                  <span className="tooltip-trigger"> living spaces? </span>
                }
                position={width <= 500 ? "center" : "right top"}
                on={width <= 1000 ? "click" : "hover"}>
                <Tooltip>
                  This includes living rooms, family rooms, play rooms, media
                  rooms, and game rooms.
                </Tooltip>
              </Popup>
            </h1>
            <Input
              type="number"
              startAdornment={
                <i className="fas fa-couch" style={{ width: "30px" }}></i>
              }
              onChange={e =>
                dispatch({ type: "UPDATE_LIVING", payload: +e.target.value })
              }
            />
          </div>
        ) : null}
        {/* {rooms.numLiving !== null ? (
          <div className="fade-in">
            <h1>
              How many
              <Popup
                trigger={<span className="tooltip-trigger"> stories </span>}
                position="right top"
                on="hover">
                <Tooltip>INSERT TOOLTIP HERE</Tooltip>
              </Popup>
              is your house?
            </h1>
            <Input
              type="number"
              startAdornment={
                <i className="fas fa-home" style={{ width: "30px" }}></i>
              }
              onChange={e =>
                dispatch({ type: "UPDATE_STORIES", payload: +e.target.value })
              }
            />
          </div>
        ) : null} */}
        {rooms.numLiving !== null ? (
          <span onClick={() => props.updateNumRooms(rooms)}>
            <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
          </span>
        ) : null}
      </Paper>
    </main>
  );
}

export default connect(undefined, { updateNumRooms })(AdminPageFive);
