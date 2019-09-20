import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";

function MudDistrictQuestion(props) {
    //state
    const [selection, setSelection] = React.useState(null);
    //template
    return (
        <>
            <h1>Are you MUD District (WHAT DOES THIS MEAN????)</h1>
            <RadioButtons 
            buttons={["Yes", "No"]}
            onSelection={setSelection}
            />
            <NextPage 
            to={`/page/${props.page + 1}`}
            />
        </>
    )
}

export default MudDistrictQuestion;