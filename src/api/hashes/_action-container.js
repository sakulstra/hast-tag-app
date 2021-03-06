import React, { Component } from 'react';
import firebase from 'firebase/app';
import { auth, db } from '../';
import { hashify } from '../../utils/hashes';

export default function(WrappedComponent){
    return class extends Component {
        fb = db.ref();

        insert = (text, cb) => {
            const userId = auth.currentUser.uid;
            const stamp = firebase.database.ServerValue.TIMESTAMP;
            const ref = this.fb.child(`/hashes/${userId}`).push();
            ref.set({ text: hashify(text), created: stamp, modified: stamp })
                .then(() => {
                    console.log("success");
                }).catch(error => {
                    console.log(error);
                });
        };

        update = (text, hashId ,cb) => {
            const userId = auth.currentUser.uid;
            const stamp = firebase.database.ServerValue.TIMESTAMP;
            const ref = this.fb.child(`/hashes/${userId}/${hashId}`);
            const updates = {
                text: hashify(text),
                modified: stamp,
            };
            ref.update(updates);
        }

        render(){
            const container = Object.assign({}, this.props.container, {
                actions: {
                    insert: this.insert,
                    update: this.update,
                }
            });
            return (
                <WrappedComponent {...this.props} container={container} />
            )
        }
    }
}
