import React from "react";
//components
import NextPage from "../NextPage/NextPage";
import { buttonStyleMain } from "../../styles/GlobalStyles";
//mui
import Button from "@material-ui/core/Button";
/**
 *
 * @prop {Function} resetForm - A function that runs when the "Add Another" button is clicked
 */

function ExtraRoomNextButton(props) {
  return (
    <>
      <br />
      <Button
        style={{ ...buttonStyleMain, marginTop: "3vh" }}
        variant="contained"
        className="fade-in admin-page-three-button"
        onClick={() => props.resetForm()}>
        Add
      </Button>
    </>
  );
}

export default ExtraRoomNextButton;
