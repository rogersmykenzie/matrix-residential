import React from "react";
//mui
import TextField from "@material-ui/core/TextField"
//styles
import NextPage from "../NextPage/NextPage";
//redux
import {connect} from "react-redux";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

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
        width: "30%",
        marginBottom: "3vh"
    }
    //event handlers
    function postInfo() {
        Axios.post("/info", {
            carportSpaces,
            garageSpaces,
            garageWidth,
            garageLength,
            totalCoverParking,
            fireplaces
        })
    }
    //render
    return (
        <Paper className="page-two-paper">
            <h1>Please enter the following information: </h1>
            <div
            style={{
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center"
            }}>
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
                {
                    props.auth === 'a' ? 
                    <>
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
                    </>
                    : null
                }
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
                whenClicked={postInfo}
                />
            </div>
        </Paper>
    )
}

export default connect(state => ({
    auth: state.userReducer.auth
}))(FeatureTotals);