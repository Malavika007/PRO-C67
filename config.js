import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAtZbwuwLXfla80y3b3YzUfDVg7AlYH3nI",
  authDomain: "team-voting-app-43c52.firebaseapp.com",
  projectId: "team-voting-app-43c52",
  storageBucket: "team-voting-app-43c52.appspot.com",
  messagingSenderId: "941382222999",
  appId: "1:941382222999:web:0890ccd8007f5faefa95d2",
  measurementId: "G-1WJ55669GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();