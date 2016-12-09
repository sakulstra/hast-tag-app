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
            return store.allSubs();
        }

        render() {
            // only called to trigger observable
            authStore.authUser();
            let list = [];
            const {
                store,
                ...props,
            } = this.props;

            if (this.state.loaded) {
                const data = store.all();
                if (data && data.values().length > 0) {
                    list = (data.entries() || [])
                        .map(entry => ({
                            hashId: entry[0],
                            ...entry[1]
                        })).sort((left,right) => left.created > right.created ? -1 : 1);
                }
            }

                const container = Object.assign(
                    {},
                    this.props.container,
                    {
                        subscription: {
                            ...this.state,
                        },
                        list,
                    },
                );
            return (
                <WrappedComponent {...props} container={container} />
            )
        }
    }))
}