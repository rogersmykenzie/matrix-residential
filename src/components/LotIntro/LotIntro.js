import React from "react";
import NextPage from "../NextPage/NextPage";

function LotIntro(props) {

    return (
        <>  
            <h1>Next will be some questions about your lot.</h1>
            <NextPage
                to={`/page/${props.page + 1}`}
            />
        </>
    )
}

export default LotIntro;