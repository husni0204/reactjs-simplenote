import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBH4lEOtqxKsj--z8fiU3U84TZxYCFYEP8",
    authDomain: "simple-note-firebase-66918.firebaseapp.com",
    databaseURL: "https://simple-note-firebase-66918-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "simple-note-firebase-66918",
    storageBucket: "simple-note-firebase-66918.appspot.com",
    messagingSenderId: "330896237555",
    appId: "1:330896237555:web:3ee45b5b32030424e3e886"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;