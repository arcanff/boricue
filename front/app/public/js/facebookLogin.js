import { FacebookAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async e => {
  e.preventDefault();

  const provider = new FacebookAuthProvider();

  try {
    await setPersistence(auth, browserLocalPersistence);

    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    console.log("Facebook sign in");
    
    // Close the login modal
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';

    // Show welcome message
    showMessage("Welcome " + credentials.user.email);

    // Redirect to another page
    window.location.href = "/Inicio"; // Replace with the actual URL

  } catch (error) {
    console.log(error);
  }
})