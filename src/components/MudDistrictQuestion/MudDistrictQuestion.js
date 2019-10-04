import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";
import ColumnPaper from "../ColumnPaper/ColumnPaper"
//libs
import Axios from "axios";

function MudDistrictQuestion(props) {
    //state
    const [selection, setSelection] = React.useState(null);
    //event handlers
    function postInfo() {
        Axios.post("/info", {
            mudDistrictInfo: {
                selection
            }
        })
    }
    //template
    return (
        <ColumnPaper>
            <h1>Is this property in a MUD?</h1>
            <RadioButtons 
            buttons={["Yes", "No"]}
            onSelection={setSelection}
            />
            <NextPage 
            to={`/page/${props.page + 1}`}
            whenClicked={postInfo}
            />
        </ColumnPaper>
    )
}

export default MudDistrictQuestion;