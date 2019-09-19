import React from 'react';

function withWasClickedFunctionality(Component) {
    return function(props) {
        const [wasClicked, setWasClicked] = React.useState(false);
        return <Component 
            wasClicked={wasClicked}
            setWasClicked={setWasClicked}
            {...props}
        />
    }
}

export default withWasClickedFunctionality;