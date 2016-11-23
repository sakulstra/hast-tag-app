import React from 'react';
import { Link } from 'react-router';
import { authContainer, authStore } from './../../../api/auth';
import { NiceWelcomeMessage } from './';
import './_header.css';

const Header = ({auth: {user}}) => (
    <header className="row">
          <div className="col-sm-offset-5 col-sm-2 col-xs-12">
              <div className="box">
                  <Link className="logo no-underline" to="/">#</Link>
              </div>
          </div>
          <div className="col-sm-5 col-xs-12">
            {user && user.uid ?
                    <div className="box">
                        <span>Don't&nbsp;
                            <a className="leaveText" href="#!" onClick={() => authStore.signOut()}>
                                #leave
                            </a>&nbsp;us please!
                        </span><br /><br />
                        <span>
                          <Link to="/settings">#settings</Link>
                        </span>
                </div> : null
            }
          </div>
            <div className="col-xs-12">
                <div className="box">
                    <NiceWelcomeMessage />
                </div>
            </div>

    </header>
);

export default authContainer(Header);
