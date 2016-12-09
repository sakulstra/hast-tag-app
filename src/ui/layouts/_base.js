import React from 'react';
import { Footer, Header } from './../components/generic';

const Base = ({children}) => (
    <div className="main">
      <Header />
        <div className="content">    
            {children}
        </div>
        <Footer />
    </div>
);

export default Base;
