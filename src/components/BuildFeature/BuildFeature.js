import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";
//mui
import Paper from "@material-ui/core/Paper";

/**
 *
 * @prop {Array[String]} properties - A list of the properties that will be turned into checkboxes
 * @prop {String} tagline - Some text to display before all the checkboxes
 * @prop {String|Number} page - The current page. Used for routing.
 * @prop {Function} whenClicked - A function to run when the next button is clicked. Will be passed the checked box values
 */
function BuildFeature(props) {
  //state
  const [selectedProps, setSelectedProps] = React.useState([]);
  //event handlers
  function onCheck(option) {
    setSelectedProps([...selectedProps, option]);
  }
  function onUncheck(option) {
    let arr = [...selectedProps];
    arr.splice(arr.indexOf(option), 1);
    setSelectedProps([...arr]);
  }
  //render
  return (
    <Paper className="page-two-paper">
      <h1>{props.tagline}</h1>
      {props.properties.map(val => {
        return (
          <CheckboxComp
            label={val}
            whenClicked={onCheck}
            whenUnclicked={onUncheck}
          />
        );
      })}
      {selectedProps.length > 0 ? (
        <NextPage
          to={`/page/${props.page + 1}`}
          whenClicked={() =>
            props.whenClicked && props.whenClicked(selectedProps)
          }
        />
      ) : null}
    </Paper>
  );
}

export default BuildFeature;
