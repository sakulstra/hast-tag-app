import React from 'react';
import { DownloadDataButton, SoftDeleteButton } from './../components/generic';

const Settings = ({data}) => (
  <div>
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <h3>Privacy</h3>
          <p>By default your account is completely private.
          Noone can see your data (that's actually the purpose of a diary).
          Anyways some people tend to feel the desire to share all their data with the public.</p>
          <p>tl;dr; If you want to share your data - just press the button below.</p>
          <button>Make your data public</button>
        </div>
      </div>
      <div className="col-xs-12">
        <div className="box">
          <h3>Export data</h3>
          <DownloadDataButton />
          ...more to come here :)
        </div>
      </div>
      <div className="col-xs-12">
        <div className="box">
          <h3>Delete account</h3>
          <SoftDeleteButton />
        </div>
      </div>
    </div>
  </div>
);

export default Settings;
