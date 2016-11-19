import React, { Component } from 'react';
import {ProgressButton, HashInput} from './';
import moment from 'moment';
import _ from 'lodash';
import {hashesActionContainer, singleContainer} from './../../../api/hashes';

class HashForm extends Component {
    state = {
        value: '',
        timeout: null,
    };

    componentWillReceiveProps(nextProps) {
        const { container: { doc } } = this.props;
        if (nextProps.container.doc
            && nextProps.container.doc.text
            && _.isEmpty(doc)
            && moment(doc.created).isSame(moment(), 'd')
        ) {
            this.setState({value: nextProps.container.doc.text});
        }
    }

    handleOnChange(value) {
        this.validateAndSave(value);
    }

    validateAndSave(value) {
        const { container: { actions, doc } } = this.props;
        const { timeout } = this.state;
        if (timeout) {
            clearTimeout(timeout);
        }
        const tm = setTimeout(() => {
            if (value === '') return;
            if (!_.isEmpty(doc) && moment(doc.created).isSame(moment(), 'd')) {
                actions.update(value, doc.hashId);
            } else {
                actions.insert(value);
            }
        }, 400);
        this.setState({ timeout: tm, value });
    }

    render() {
        const {value} = this.state;
        return (
            <div>
                <HashInput value={value} onChange={(value) => this.handleOnChange(value)}/>
                {/*<button onClick={() => actions.insert(this.state.value)}>Save</button>*/}
                {/* <ProgressButton /> */}
            </div>
        );
    }
};

export default singleContainer(hashesActionContainer(HashForm));