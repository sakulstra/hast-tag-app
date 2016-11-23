import React, {Component} from 'react';
import {Match, Redirect} from 'react-router';
import { authContainer } from './../../api/auth';
import { LoadingIndicator } from './../../ui/components/generic';

class MatchWhenAuthorized extends Component{
    state = {
        timeout: null,
        loading: true,
    };

    render() {
        const { component: Component, auth: {user}, ...rest } = this.props;
        const { loading } = this.state;
        // hrhr really ugly hack to make sure auth is ready!
        if (loading) {
            setTimeout(() => {
                this.setState({
                    timeout: null,
                    loading: false,
                });
            }, 1000);
        }
        return (
            <Match {...rest} render={props => (
                loading ?
                    <LoadingIndicator /> :
                    user && user.uid ? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}/>
                    )
            )}/>
        );
    }
};

export default authContainer(MatchWhenAuthorized);
