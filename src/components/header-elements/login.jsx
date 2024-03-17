import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div id='signin-box'>
            <NavLink id='signin-link-style' to='/login'>Sign in</NavLink>
        </div>
    );
}

export default Login;
