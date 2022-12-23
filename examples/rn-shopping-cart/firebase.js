// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyAcRF8wZg9I1VHwS_UgTf2GZpSUNoymFwM',
    authDomain: 'react-native-shopping-ca-8975f.firebaseapp.com',
    projectId: 'react-native-shopping-ca-8975f',
    storageBucket: 'react-native-shopping-ca-8975f.appspot.com',
    messagingSenderId: '72906762973',
    appId: '1:72906762973:web:7c1657fa2a8c20fc7a4934',
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
export { auth };
