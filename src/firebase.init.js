// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClrIYO4Dm5ZXJg175Rv3Qy78_aXrtCC4A",
    authDomain: "genius-car-services-78547.firebaseapp.com",
    projectId: "genius-car-services-78547",
    storageBucket: "genius-car-services-78547.appspot.com",
    messagingSenderId: "979024547293",
    appId: "1:979024547293:web:0cf96a804312c0b62efa34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
