import React from 'react';
//mui
import Paper from '@material-ui/core/Paper';
//components
import NextPage from '../NextPage/NextPage';
//redux
import {connect} from 'react-redux';
//routing
import {Redirect} from 'react-router-dom'

function AdminPageSix(props) {
    console.log(props)
    if(props.numBeds <= 0) {
        return <Redirect to={`/page/${props.page + 2}`} />
    }
    return (
        <main className='container'>
            <Paper className='page-two-paper'>
                <h1>We will now create an entry for each bedroom in your house.</h1>
                <NextPage to={`/page/${props.page + 1}/1`} />
            </Paper>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        numBeds: state.formInfoReducer.numRooms.numBeds
    }
}

export default connect(mapStateToProps)(AdminPageSix);