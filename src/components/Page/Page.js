import React from 'react';
//components
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
const Page = props => {
    switch(+props.match.params.pageNum) {
        case 1:
        return <PageOne />
        case 2:
        return <PageTwo />
        default: return <div>
            <h1>Oops! Page could not be found :( Please contact site administrator at mykenzierogers@gmail.com</h1>
        </div>
    }
}

export default Page;