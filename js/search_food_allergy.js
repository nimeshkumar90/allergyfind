// Import Firebase modules
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getDatabase, ref , onValue, set} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"
        
const firebaseConfig = {
    apiKey: "AIzaSyC1tD2l1Le9CmjkA76pB0w_92hw7aFQrvU",
    authDomain: "alleryfindapp.firebaseapp.com",
    databaseURL: "https://alleryfindapp-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "alleryfindapp",
    storageBucket: "alleryfindapp.firebasestorage.app",
    messagingSenderId: "514651038203",
    appId: "1:514651038203:web:888d5d5d222999e0002b5e",
    measurementId: "G-NSQGE7ZZK0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function getAllAllergies(){
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    // Reference to the data in the database
    const dbRef = ref(database, `allergies`); // Replace 'your-data-path' with the path in your database

    // Read data from Firebase Realtime Database
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}

getAllAllergies()