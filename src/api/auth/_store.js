import firebase from 'firebase';
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
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
        });
    }

    signOut = () => {
        auth.signOut().then(function() {
            // Sign-out successful.
        }, function(error) {
            // An error happened.
        });
    }
}

export default new AuthStore();