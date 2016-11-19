import React from 'react';
import { authStore } from './../../../api/auth';
import './_login-button-google.css';

export const LoginButtonGoogle = () => (
    <div className="circle" onClick={() => authStore.signInWithGoogle()}>
        #G
    </div>
);

export default LoginButtonGoogle;