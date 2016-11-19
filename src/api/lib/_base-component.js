import React, { Component } from 'react';

export default class BaseComponent extends Component {

    state = {
        loading: true,
        loaded: false,
        error: false,
        errorMessage: '',
    }

    subscribeSubs(subs, props, state) {
        const {unsubscribe, promise} = props.store.subscribeSubsWithPromise(subs);
        this.setState({
            loading: true,
            loaded: false,
            error: false,
            errorMessage: '',
        }, () => {
            promise.then(
                () => this.setState({
                    loading: false,
                    loaded: true,
                    error: false,
                    errorMessage: '',
                }),
                (error) => this.setState({
                    loading: false,
                    loaded: false,
                    error: true,
                    errorMessage: error,
                })
            );
        });
        return unsubscribe;
    }

    fetchDocument = (data, idKey, idValue) => {
        let doc = {};
        doc[idKey] = idValue;
        (data || []).forEach((value,key,map) => {
            doc[key] = value
        });
        return doc;
    }

}