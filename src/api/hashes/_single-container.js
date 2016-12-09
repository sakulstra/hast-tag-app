import React from 'react';
import {observer} from 'mobx-react';
import {autoSubscriber} from 'firebase-nest';
import {store} from './';
import {authStore} from '../auth';
import {BaseComponent} from '../lib';


export default function (WrappedComponent) {
    return autoSubscriber(observer(class extends BaseComponent {

        static defaultProps = {
            store: store
        }

        static getSubs(props, state) {
            if (!authStore.authUser()) return [];
            return store.lastSubs();
        }

        render() {
            // only called to trigger observable
            authStore.authUser();
            let doc = {};
            const {
                store,
                ...props,
            } = this.props;

            if (this.state.loaded) {
                const data = store.last();
                if (data && data.values().length > 0) {
                    const list = data.entries();
                    doc = {
                        hashId: list[list.length-1][0],
                        ...list[list.length-1][1]
                    };
                }
            }

            const container = Object.assign(
                {},
                this.props.container,
                {
                    subscription: {
                        ...this.state,
                    },
                    doc,
                },
            );
            return (
                <WrappedComponent {...props} container={container} />
            )
        }
    }))
}