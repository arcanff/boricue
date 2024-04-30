import { signInWithEmailAndPassword , setPersistence, browserLocalPersistence} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    await setPersistence(auth, browserLocalPersistence);

    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    // Close the login modal
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';

    // reset the form
    signInForm.reset();

    // Show welcome message
    showMessage("Welcome " + credentials.user.email);

    // Redirect to another page
    window.location.href = "/Inicio"; // Replace with the actual URL

  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Wrong password", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("User not found", "error")
    } else {
      showMessage("Something went wrong", "error")
    }
  }
});