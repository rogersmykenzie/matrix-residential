import React from "react";
//components
import NextPage from "../NextPage/NextPage";
import ColumnPaper from "../ColumnPaper/ColumnPaper";
import RoomCard from "../RoomCard/RoomCard";
//fetch
import axios from "axios";

function AdminPageFourteen(props) {
  const [rooms, setRooms] = React.useState([]);

  React.useEffect(() => {
    axios.get("/server/rooms").then(response => {
      const {
        bedroomData,
        bathroomData,
        diningData,
        livingData
      } = response.data;
      setRooms([bedroomData, bathroomData, diningData, livingData]);
    });
  }, []);
  //DATA SHAPE
  /* 
  response.data = {
    bathroomData: [
      {
        level: number,
        width: number
        length: number
        properties: Array<String>
        type: string
      },
      ...
    ],
    bedroomData: [...],
    diningData: [...],
    livingData: [...]
  }
  */
  // console.log(rooms);
  const roomMap = rooms.map((val, i) => {
    if (val && val.length > 0) {
      let displayText = (function() {
        switch (i) {
          case 0:
            return "Bedrooms:";
          case 1:
            return "Bathrooms:";
          case 2:
            return "Dining Rooms:";
          case 3:
            return "Living Rooms:";
          default:
            return null;
        }
      })();
      return (
        <div className="room-cards__master">
          <h2>{displayText}</h2>
          {val.map(room => (
            <RoomCard data={room} />
          ))}
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <ColumnPaper>
      <h1>Are there any other rooms that you need to enter?</h1>
      <div className="next-button__master">
        <div className="next-button__container">
          <NextPage to={"/page/" + (props.page + 1)} buttonText="No" />
          <NextPage to="/rooms/extra" buttonText="Yes" />
        </div>
      </div>
      {roomMap}
    </ColumnPaper>
  );
}

export default AdminPageFourteen;
