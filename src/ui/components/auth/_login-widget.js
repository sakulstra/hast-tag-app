import React from 'react';
import { Link } from 'react-router';
import { authContainer } from './../../../api/auth';
import { LoginButtonGoogle } from './';

const LoginWidget = ({auth: {user}}) => (
    <div>
        {user && user.uid ?
            <Link to="/diary">
                <div className="circle">
                    #
                </div>
            </Link> :
            <LoginButtonGoogle />
        }
    </div>
);

export default authContainer(LoginWidget);