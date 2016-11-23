import React, { PropTypes } from 'react';
import { Link, Redirect } from 'react-router';
import { authContainer } from './../../../api/auth';
import { LoginButtonGoogle } from './';

const LoginWidget = ({auth: {user}}, {router}) => (
    <div>
        {user && user.uid ?
            <Link className="no-underline" to="/diary">
                <div className="circle">
                    #
                </div>
            </Link> :
            <LoginButtonGoogle handleLogin={() => {
                setTimeout(() => router.transitionTo('/diary'), 1000);
            }}/>
        }
    </div>
);

LoginWidget.contextTypes = {
    router: PropTypes.shape({
        transitionTo: PropTypes.func,
    }),
};

export default authContainer(LoginWidget);
