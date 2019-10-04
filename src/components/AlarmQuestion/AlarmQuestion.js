import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";
import CheckboxComp from "../CheckboxComp/CheckboxComp"
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

function AlarmQuestion(props) {
    //state
    const [selection, changeSelection] = React.useState(null);
    const [selectedTypes, setSelectedTypes] = React.useState([]);
    //constants
    const securityTypes = ["Burglar", "Carbon Mono Detector", "Ext Security Light(s)", "Fire Sprinkler System", "Fire/Smoke", "Firewall(s)", "Leased", "Monitored", "Other", "Owned", "Pre-Wired", "Smoke Detector", "Unknown", "Wireless"];
    //event handlers
    function onRadioSelect(option) {
        changeSelection(option);
    }
    function onCheck(option) {
        setSelectedTypes([...selectedTypes, option]);
    }
    function onUncheck(option) {
        let arr = [...selectedTypes];
        arr.splice(arr.indexOf(option), 1);
        setSelectedTypes([...arr]);
    }
    function postInfo() {
        Axios.post("/info", {
            alarmInfo: {
                selection,
                selectedTypes
            }
        })
    }
    //render
    return (
        <Paper className="page-two-paper">
            <h1>Does your home have any alarms/security system?</h1>
            <RadioButtons 
                buttons={["Yes", "No"]}
                onSelection={onRadioSelect}
            />
            {
            selection === "Yes" &&
                securityTypes.map(val => {
                    return <CheckboxComp 
                        label={val}
                        whenClicked={onCheck}
                        whenUnclicked={onUncheck}
                    />
                })
            }
            <NextPage 
                to={`/page/${props.page + 1}`}
                whenClicked={postInfo}
            />
        </Paper>
    )
}

export default AlarmQuestion;