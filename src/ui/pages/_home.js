import React from 'react';
import {Base} from './../layouts';
import {LoginWidget} from './../components/auth';

const Home = () => (
    <Base>
        <LoginWidget />
        <div>
            Hello, nice to have you here :)
        </div>
    </Base>
);

export default Home;