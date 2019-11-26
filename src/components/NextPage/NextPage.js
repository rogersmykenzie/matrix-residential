import React from "react";
//mui
import Button from "@material-ui/core/Button";
//inline styles
import { buttonStyleMain } from "../../styles/GlobalStyles";
//routing
import { Redirect, Link, withRouter } from "react-router-dom";
//css
import "./NextPage.css";

/**
 * @param {String} to - The route that the button links to
 * @param {String} whenClicked - A function to run when the button is clicked
 * @param {String} buttonText - Text for the button to display
 */

function NextPage(props) {
  console.log("PROPS", props);
  // const [shouldRedirect, setShouldRedirect] = React.useState(false);
  function runWhenClicked() {
    if (props.whenClicked) {
      props.whenClicked();
    }
  }
  return (
    <>
      <br />
      <Link
        to={props.to}
        onClick={props.whenClicked ? props.whenClicked : null}>
        <Button
          className="fade-in admin-page-three-button"
          style={{ ...buttonStyleMain, marginTop: "3vh" }}
          // onClick={runWhenClicked}
          variant="contained">
          {props.buttonText === undefined ? "Next" : props.buttonText}
        </Button>
      </Link>
    </>
  );
}

export default withRouter(NextPage);
