import React from 'react';
//components
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import AdminPageThree from '../AdminPageThree/AdminPageThree';
import PageFour from '../PageFour/PageFour';
import AdminPageFive from '../AdminPageFive/AdminPageFive';
//redux
import {connect} from 'react-redux';
//routing
import {Redirect} from 'react-router-dom'

const Page = props => {
    //Switch hard a to `props.auth` for prod
    switch(+props.match.params.pageNum + 'a') {
        case '1c':
        case '1a':
        return <PageOne />
        case '2c':
        case '2a':
        return <PageTwo />
        case '3a':
        return <AdminPageThree />
        case '3c':
        case '4a':
        return <PageFour />
        case '5a':
        return <AdminPageFive />
        default: return <h1>Oops! Page could not be found :( Please contact site administrator at mykenzierogers@gmail.com</h1>
    }
}

const mapStateToProps = state => {
    return {
        auth: state.userReducer.auth
    }
}

export default connect(mapStateToProps)(Page);