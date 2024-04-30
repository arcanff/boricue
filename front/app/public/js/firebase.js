import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyB7onl1VgAG4Ro-egQxLjb_UIzLYm0Y0po",
    authDomain: "boricue-aa166.firebaseapp.com",
    projectId: "boricue-aa166",
    storageBucket: "boricue-aa166.appspot.com",
    messagingSenderId: "488110157474",
    appId: "1:488110157474:web:6efd44cefc5ea4281b31fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)