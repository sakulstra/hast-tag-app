import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAGfZUVhuOfFuwzl9RawTiaH85AQ85BYcg",
    authDomain: "hashtagapp-6d52c.firebaseapp.com",
    databaseURL: "https://hashtagapp-6d52c.firebaseio.com",
    storageBucket: "hashtagapp-6d52c.appspot.com",
    messagingSenderId: "851617017454"
};

const app = firebase.initializeApp(config);
// export all needed firebase functionality here to avoid double initialization
export default app;
export const db = app.database();
export const auth = app.auth();
export const storage = app.storage();