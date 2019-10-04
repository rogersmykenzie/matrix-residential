import React from "react";
//component
import ColumnPaper from "../ColumnPaper/ColumnPaper";
//css
import "./EndPage.css";
//libs
import Axios from "axios";

function EndPage(props) {
    React.useEffect(() => {
        Axios.post("/email")
    }, [])
    return (
        <ColumnPaper>
            <main className="end-page-container">
                <div className="end-page-container">
                    <h1>Success! You have completed this form. Reach out to your agent to let them know that they should be receiving an email soon with all your inputted information!</h1>
                </div>
            </main>
        </ColumnPaper>
    )
}

export default EndPage;