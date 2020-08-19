import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../services/auth';

function Private({component: Component,auth, ...rest}:any){
    return(
        <Route {...rest} 
            render={props => (
                isLogin() ? <Component {...props} /> : <Redirect to="/login" />
            )} 
        />
    )
}

export default Private;