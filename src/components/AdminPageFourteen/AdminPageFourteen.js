import React from 'react';
//components
import NextPage from '../NextPage/NextPage';
import ColumnPaper from "../ColumnPaper/ColumnPaper";

function AdminPageFourteen(props) {

    return (
        <ColumnPaper>
            <h1>Are there any other rooms that you need to enter?</h1>
            <NextPage 
                to='/page/15'
                buttonText="No"
            />
            <NextPage
                to="/rooms/extra"
                buttonText="Yes"
            />
        </ColumnPaper>
    )
}

export default AdminPageFourteen;