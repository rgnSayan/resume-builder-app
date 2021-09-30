import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDf-k-rxOgJaAt9fow08FkTUqW2XK0y4gk",
    authDomain: "resume-app-91c75.firebaseapp.com",
    projectId: "resume-app-91c75",
    storageBucket: "resume-app-91c75.appspot.com",
    messagingSenderId: "918005525613",
    appId: "1:918005525613:web:f1ef357ffdfec360e8a364"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

export { auth };
export default db;
