import React from 'react';
//components
import NextPage from '../NextPage/NextPage';

function AdminPageFourteen(props) {

    return (
        <>
            <h1>Are there any other rooms that you need to enter?</h1>
            <NextPage 
                to='/page/15'
                buttonText="No"
            />
            <NextPage
                to="/rooms/extra"
                buttonText="Yes"
            />
        </>
    )
}

export default AdminPageFourteen;