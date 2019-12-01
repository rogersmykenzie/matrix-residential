import React from "react";
//component
import ColumnPaper from "../ColumnPaper/ColumnPaper";
//css
import "./EndPage.css";
//libs
import Axios from "axios";

function EndPage(props) {
  React.useEffect(() => {
    Axios.post("/email");
  }, []);
  return (
    <ColumnPaper>
      <main className="end-page-container">
        <div className="end-page-container">
          <h1>
            Success! Thank you for completing the Sellers Listing Form. You are
            free to leave this site.
          </h1>
        </div>
      </main>
    </ColumnPaper>
  );
}

export default EndPage;
