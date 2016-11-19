import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {authStore} from './';

export default function (WrappedComponent) {
    return observer(class extends Component {
        static defaultProps = {
            store: authStore
        }

        render() {
            const auth = {
                user: this.props.store.authUser(),
            };

            return (
                <WrappedComponent {...this.props} auth={auth} />
            )
        }
    })
}