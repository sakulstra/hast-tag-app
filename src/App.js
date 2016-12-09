import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import { MatchWhenAuthorized } from './utils/routing';
import { Error404, Home, Diary, Imprint, Settings } from './ui/pages';
import './api';
import './api/auth';
import './main.css';
import 'normalize.css';
import 'flexboxgrid';
import {Base} from './ui/layouts';

const App = ({children}) => (
    <BrowserRouter>
        <Base>
            <Match exactly pattern="/" component={Home}/>
            <MatchWhenAuthorized pattern="/diary" component={Diary}/>
            <MatchWhenAuthorized pattern="/imprint" component={Imprint}/>
            <MatchWhenAuthorized pattern="/settings" component={Settings}/>
            <Miss component={Error404}/>
        </Base>
    </BrowserRouter>
);

export default App;
