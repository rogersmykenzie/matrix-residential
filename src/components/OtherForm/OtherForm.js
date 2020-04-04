import React from "react";
import ExtraRoomNextButton from "../ExtraRoomNextButton/ExtraRoomNextButton";

function OtherForm(props) {
  const [text, setText] = React.useState("");
  const [room, setRoom] = React.useState("");
  return (
    <>
      <input placeholder="Room Name" onChange={e => setRoom(e.target.value)} />
      <h1>Insert any info you need to note about this room: </h1>
      <textarea onChange={e => setText(e.target.value)}></textarea>
      <ExtraRoomNextButton
        resetForm={() =>
          props.reset({
            info: text,
            name: room
          })
        }
      />
    </>
  );
}

export default OtherForm;
