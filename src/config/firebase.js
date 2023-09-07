import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFrvKbn56OzTs2bpbK_vr4N3Rt5p8L12Y",
    authDomain: "imoney-da33f.firebaseapp.com",
    projectId: "imoney-da33f",
    storageBucket: "imoney-da33f.appspot.com",
    messagingSenderId: "529932151480",
    appId: "1:529932151480:web:d567f739f1a356f828224d",
    measurementId: "G-31P2S890BN"
};

const firebaseApp = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(firebaseApp);

const timestamp = serverTimestamp();