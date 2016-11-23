import React from 'react';
import { authStore } from './../../../api/auth';
import './_login-button-google.css';

export const LoginButtonGoogle = ({handleLogin}) => (
    <div className="circle" onClick={() => authStore.signInWithGoogle(handleLogin)}>
        #G
    </div>
);

export default LoginButtonGoogle;