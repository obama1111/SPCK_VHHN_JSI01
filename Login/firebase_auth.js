// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlpuSwAbhUR2N13N0yLQppwXfzmyZshK0",
  authDomain: "projectjsi09.firebaseapp.com",
  projectId: "projectjsi09",
  storageBucket: "projectjsi09.appspot.com",
  messagingSenderId: "741385313828",
  appId: "1:741385313828:web:bd8580607c3c05607602b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
const googleP = new GoogleAuthProvider();
const githubP = new GithubAuthProvider();

const database = getDatabase(app);

const login = (provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = provider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user))
      alert("DANG NHAP THANH CONG!!");
      window.location.href = "/Main_forum/index.html?#"
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = provider.credentialFromError(error);
      // ...
    });
}

const loginRedirect = (provider) => {
  signInWithRedirect(auth, provider);
}

const getuserinfor = (provider) => {
  getRedirectResult(auth)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        // ...
      }

      // The signed-in user info.
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user))
      alert("DANG NHAP THANH CONG!!");
      window.location.href = "/Main_forum/index.html?#"
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
}

const appendPost = async (postdata) => {
  const postListRef = ref(database, 'posts');
  const newPostRef = push(postListRef);
  await set(newPostRef, {
    ...postdata
  });
}

export { auth, login, googleP, githubP, loginRedirect, getuserinfor, appendPost, onValue, ref, database }



