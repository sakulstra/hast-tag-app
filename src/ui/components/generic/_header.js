import React from 'react';
import { authContainer, authStore } from './../../../api/auth';
import { NiceWelcomeMessage } from './';
import './_header.css';

const Header = ({auth: {user}}) => (
    <header>
        <NiceWelcomeMessage />&nbsp;
        {user && user.uid ?
            <span>Don't <a className="leaveText" href="#!" onClick={() => authStore.signOut()}>leave</a> us please!</span> : null
        }
    </header>
);

export default authContainer(Header);