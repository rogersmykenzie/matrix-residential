import React from "react";
//mui
import TextField from "@material-ui/core/TextField"
//styles
import NextPage from "../NextPage/NextPage";
function FeatureTotals(props) {
    //state
    const [carportSpaces, setCarportSpaces] = React.useState(null)
    const [garageSpaces, setGarageSpaces] = React.useState(null)
    const [garageWidth, setGarageWidth] = React.useState(null)
    const [garageLength, setGarageLength] = React.useState(null)
    const [totalCoverParking, setTotalCoverParking] = React.useState(null)
    const [fireplaces, setFireplaces] = React.useState(null)
    //inline styles
    const textFieldStyle = {
        width: "15%",
        marginBottom: "3vh"
    }
    //render
    return (
        <>
            <h1>Please enter the following information: </h1>
            <TextField
            variant="outlined"
            placeholder="Carport Spaces"
            type="number"
            style={textFieldStyle}
            onChange={e => setCarportSpaces(e.target.value)}
            />
            <TextField
            variant="outlined"
            placeholder="Garage Spaces"
            type="number"
            style={textFieldStyle}
            onChange={e => setGarageSpaces(e.target.value)}
            />
            <TextField
            variant="outlined"
            placeholder="Garage Width"
            type="text"
            style={textFieldStyle}
            onChange={e => setGarageWidth(e.target.value)}
            />
            <TextField
            variant="outlined"
            placeholder="Garage Length"
            type="text"
            style={textFieldStyle}
            onChange={e => setGarageLength(e.target.value)}
            />
            <TextField
            variant="outlined"
            placeholder="Total Cover Parking"
            type="number"
            style={textFieldStyle}
            onChange={e => setTotalCoverParking(e.target.value)}
            />
            <TextField
            variant="outlined"
            placeholder="Fireplaces"
            type="number"
            style={textFieldStyle}
            onChange={e => setFireplaces(e.target.value)}
            />
            <NextPage 
            to={`/page/${props.page + 1}`}
            />
        </>
    )
}

export default FeatureTotals;