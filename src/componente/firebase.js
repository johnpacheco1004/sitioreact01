// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAqknqeo1ndU2Ocn9_elMiNlUtBROBUkbQ',
    authDomain: 'persona-8d8fe.firebaseapp.com',
    projectId: 'persona-8d8fe',
    storageBucket: "persona-8d8fe.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;