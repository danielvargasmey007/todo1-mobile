import { Component } from 'react';
import * as firebase from 'firebase';

class FireBaseService extends Component {
    static init() {
        try {
            firebase.initializeApp({
                apiKey: "AIzaSyCkyfwSW-x5XVgN-aIzwaxMJJ4sO2IS9vg",
                authDomain: "todo1-38403.firebaseapp.com",
                databaseURL: "https://todo1-38403.firebaseio.com",
                storageBucket: ""
            });
        } catch (error) {
            if (!/already exists/.test(error.message)) {
                console.error('Firebase initialization error', err.stack)
            }
        }
    }
}

export default FireBaseService;
