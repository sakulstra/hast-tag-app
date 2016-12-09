import firebase from 'firebase/app';
import { auth } from '../';
import { observable } from 'mobx';

class AuthStore {
    constructor() {
        this.auth = observable({
            authUser: null
        });

        this.unwatchAuth = auth.onAuthStateChanged(user => {
            this.auth.authUser = user;
        });
    }

    authUser = () => this.auth.authUser;

    cleanup() {
        if (this.unwatchAuth) {
            this.unwatchAuth();
        }
    }

    signInWithGoogle = (cb) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(function(result) {
            cb()
        }).catch(function(error) {
            const errorMessage = error.message;
        });
    }

    signOut = () => {
        auth.signOut().then(function() {
            // Sign-out successful.
        }, function(error) {
            // An error happened.
        });
    }

    delete = () => {
      auth.currentUser.delete().then(
        () => {
          
        }).catch(e => {

        })
    }
}

export default new AuthStore();
