import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyDjAi4nnoGRjD4sztWF9nPHBduOy7axSVM",
  authDomain: "ustar-project.firebaseapp.com",
  databaseURL: "https://ustar-project.firebaseio.com",
  projectId: "ustar-project",
  storageBucket: "ustar-project.appspot.com",
  messagingSenderId: "202087391894",
  appId: "1:202087391894:web:9881624e18497a52bb18b7",
};
const Fire = firebase.initializeApp(config);
export default Fire;
