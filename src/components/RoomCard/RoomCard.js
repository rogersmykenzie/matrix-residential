import React from "react";
//css
import "./RoomCard.css";
/**
 *
 * @prop {Object!} data - An object containing data about the room
 * @prop {Number!} data.level - A number stating what level this room is on
 * @prop {Number} data.width - A number stating what the width of the room is
 * @prop {Number} data.length - A number stating what the length of the room is
 * @prop {Array<String>!} data.properties - An array with the different properties of the room
 * @prop {String!} data.type - A string stating what type of room this is
 */
function RoomCard(props) {
  function handleError() {
    console.warn(
      "A room card was provided a defunct data prop. Please review."
    );
  }

  const { data } = props;
  if (data === undefined) {
    handleError();
    return null;
  }

  let testArr = [data.level, data.properties, data.type];
  if (testArr.includes(undefined)) {
    handleError();
    return null;
  }

  function camelToNormal(string) {
    let stringArg = string.trim();
    let newString = stringArg[0].toUpperCase();
    for (let i = 1; i < stringArg.length; i++) {
      if (stringArg[i].toUpperCase() === stringArg[i]) {
        newString += " ";
      }
      newString += stringArg[i];
    }
    return newString;
  }
  function kebabToNormal(string) {
    return string
      .trim()
      .split("-")
      .map(val => val[0].toUpperCase() + val.substring(1).toLowerCase())
      .join(" ");
  }
  function convertToReadable(string) {
    if (string.includes("-")) {
      return kebabToNormal(string);
    } else {
      return camelToNormal(string);
    }
  }

  return (
    <div className="room-card__container">
      {data.type ? <h3>Type: {convertToReadable(data.type)}</h3> : null}
      {data.level ? <h3>Level: {data.level}</h3> : null}
      {props.data.width !== undefined &&
      props.data.width !== null &&
      props.data.length !== undefined &&
      props.data.length !== null ? (
        <>
          <h3>Width: {data.width}</h3>
          <h3>Length: {data.length}</h3>
        </>
      ) : null}
      <h4>This room has the following properties:</h4>
      <ul>
        {data.properties.map(val => (
          <li>{val}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomCard;
