import React from 'react';
import {Base} from './../layouts';
import {LoginWidget} from './../components/auth';

const Home = () => (
    <Base>
        <LoginWidget />
        <div>
            <h2>Hello, nice to have you here :)</h2>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="box">
                    <h3>#Wth?</h3>
                    <p>
                        Yep. This is even more awesome than you aleady think.
                        You can basically write one #hash(a long word in canelcase) a day.
                        Think about what was the most important, funny, nice thing that happened today.
                        This forces you to reflect you day and whats worth to be saved.
                    </p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-4 col-xs-12">
                <div className="box">
                    <h4>#ecoFriendly</h4>
                    <p>
                        By only writing one word per day, you save *paper* and *ink*.
                        Isn't this just incredible?
                    </p>
                </div>
            </div>
            <div className="col-sm-4 col-xs-12">
                <div className="box">
                    <h4>#secureAndPrivate</h4>
                    <p>
                        You're data is your data.
                        We don't sell it, we don't use it for anything.
                        We just store it for you. You have the control.
                    </p>
                </div>
            </div>
            <div className="col-sm-4 col-xs-12">
                <div className="box">
                    <h4>#ridiculousSimple</h4>
                    <p>
                        You have one input field.
                        That's the whole application.
                        Every moron can use it.
                    </p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12">
                <div className="box">
                    <h3>#feedback</h3>
                    <p>
                        We would actually love to hear from you.
                        This app isn't meant to serious, but we'd like to improve it to make is even better ;)
                        Feel free to send a mail to <a href="mailto:lukas@waat.eu">lukas@waat.eu</a>.
                    </p>
                </div>
            </div>
        </div>
    </Base>
);

export default Home;