import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import { MatchWhenAuthorized } from './utils/routing';
import { Error404, Home, Diary } from './ui/pages';
import './api';
import './api/auth';
import './main.css';
import 'normalize.css';
import 'flexboxgrid';

const App = ({children}) => (
    <BrowserRouter>
        <div>
            <Match exactly pattern="/" component={Home}/>
            <MatchWhenAuthorized pattern="/diary" component={Diary}/>
            <Miss component={Error404}/>
        </div>
    </BrowserRouter>
);

export default App;
