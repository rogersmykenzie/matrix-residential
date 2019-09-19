import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";
import CheckboxComp from "../CheckboxComp/CheckboxComp"

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
    //render
    return (
        <>
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
            />
        </>
    )
}

export default AlarmQuestion;