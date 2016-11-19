import React from 'react';
import './_progress-button.css';

const ProgressButton = () => (
    <div id="progress-button" className="progress-button">
        <button><span>Submit</span></button>

        <svg className="progress-circle" width="70" height="70">
            <path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/>
        </svg>

        <svg className="checkmark" width="70" height="70">
            <path d="m31.5,46.5l15.3,-23.2"/>
            <path d="m31.5,46.5l-8.5,-7.1"/>
        </svg>

        <svg className="cross" width="70" height="70">
            <path d="m35,35l-9.3,-9.3"/>
            <path d="m35,35l9.3,9.3"/>
            <path d="m35,35l-9.3,9.3"/>
            <path d="m35,35l9.3,-9.3"/>
        </svg>

    </div>
);

export default ProgressButton;