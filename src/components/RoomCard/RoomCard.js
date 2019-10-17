import React from "react";
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

  return (
    <div>
      <h3>Type: {data.type}</h3>
      <h3>Level: {data.level}</h3>
      {props.data.width !== undefined && props.data.length !== undefined ? (
        <>
          <h3>Width: {data.width}</h3>
          <h3>Length: {data.length}</h3>
        </>
      ) : null}
      <ul>
        {data.properties.map(val => (
          <li>{val}</li>
        ))}
      </ul>
    </div>
  );
}

export default RoomCard;
