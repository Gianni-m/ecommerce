import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    console.log(authed)
    if(!authed) {
        return <Redirect to="/"/>
    } else {
        return (
            <Route
                {...rest}
                render={props => (
                    <Component {...props} />
                )}
            />
        )
    }
}

export default PrivateRoute;