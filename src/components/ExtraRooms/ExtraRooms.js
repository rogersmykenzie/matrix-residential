import React from "react";
//components
import forms from "../../modules/FormsModule";
import NextPage from "../NextPage/NextPage";


function ExtraRooms(props) {
    //constants
    let options = ["--Select an Option", "Master Bedroom", "Guest Bedroom", "Other Bedroom", "Dining Room", "Kitchen", "Breakfast Nook", "Full Bathroom", "Half Bathroom", "Living Room", "Game Room", "Media Room", "Study", "Utility Room", "Other"];
    //state
    const [room, setRoom] = React.useState(null)
    const [roomOptions, setOptions] = React.useState(options);
    const [changesMade, setChangesMade] = React.useState(false);
    //refs
    const formRef = React.useRef();
    //event handlers
    function onRoomChange(e) {
        // if(roomOptions.includes("Select an Option")) { //get rid of the "Select an Option" option
        //     let newArr = [...roomOptions];
        //     newArr.splice(0,1);
        //     setOptions(newArr);
        // }
        setRoom(e.target.value)
    }
    function resetForm() {
        formRef.current.value = "--Select an Option";
        setRoom("--Select an Option");
        setChangesMade(true);
    }
    //component decider
    const SelectedForm = (function() {
        switch(room) {
            case "Master Bedroom":
                return forms.MasterBedroomType;
            case "Guest Bedroom":
                return forms.GuestBedroomType;
            case "Other Bedroom":
                return forms.OtherBedroomType;
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
            default: return () => <h1>Whoops, something bad happened</h1>
        }
    })()
    //render
    return (
        <>
            <h1>What kind of room would you like to add?</h1>
            <select 
            onChange={onRoomChange}
            ref={formRef}
            >
                {roomOptions.map(val => {
                    return <option value={val}>{val}</option>
                })}
            </select>
            <SelectedForm 
                cameFromExtraRoom 
                resetForm={resetForm}
            />
            <NextPage 
                to="/page/15"
                buttonText={!changesMade ? "Go Back" : "Finish Adding Rooms"}
            />
        </>
    );
}

export default ExtraRooms;