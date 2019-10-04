import React from "react";
import NextPage from "../NextPage/NextPage";
import ColumnPaper from "../ColumnPaper/ColumnPaper";
function LotIntro(props) {

    return (
        <ColumnPaper>  
            <h1>Next will be some questions about your lot.</h1>
            <NextPage
                to={`/page/${props.page + 1}`}
            />
        </ColumnPaper>
    )
}

export default LotIntro;