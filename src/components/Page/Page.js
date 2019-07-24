import React from 'react';
//components
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import AdminPageThree from '../AdminPageThree/AdminPageThree';
import PageFour from '../PageFour/PageFour';
import AdminPageFive from '../AdminPageFive/AdminPageFive';
import AdminPageSix from '../AdminPageSix/AdminPageSix';
import AdminPageSeven from '../AdminPageSeven/AdminPageSeven'
import AdminPageEight from '../AdminPageEight/AdminPageEight';
import AdminPageNine from '../AdminPageNine/AdminPageNine';
import AdminPageTen from '../AdminPageTen/AdminPageTen';
import AdminPageEleven from '../AdminPageEleven/AdminPageEleven';
import AdminPageTwelve from '../AdminPageTwelve/AdminPageTwelve';
//redux
import {connect} from 'react-redux';

const Page = props => {
    //Switch hard a / c to `props.auth` for prod
    switch(+props.match.params.pageNum + 'a') {
        case '1c':
        case '1a':
            return <PageOne page={+props.match.params.pageNum} />
        case '2c':
        case '2a':
            return <PageTwo page={+props.match.params.pageNum} />
        case '3a':
            return <AdminPageThree page={+props.match.params.pageNum} />
        case '3c':
        case '4a':
            return <PageFour page={+props.match.params.pageNum} />
        case '5a':
        case '4c':
            return <AdminPageFive page={+props.match.params.pageNum} />
        case '6a':
            return <AdminPageSix page={+props.match.params.pageNum} />
        case '7a':
            return <AdminPageSeven page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '8a':
            return <AdminPageEight page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '9a':
            return <AdminPageNine page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '10a':
            return <AdminPageTen page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '11a':
            return <AdminPageEleven page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        case '12a':
            return <AdminPageTwelve page={+props.match.params.pageNum} room={+props.match.params.roomNum} />
        default: return <h1>Oops! Page could not be found :( Please contact site administrator at mykenzierogers@gmail.com</h1>
    }
}

const mapStateToProps = state => {
    return {
        auth: state.userReducer.auth
    }
}

export default connect(mapStateToProps)(Page);