 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
 import { getAuth, GoogleAuthProvider, signInWithPopup  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
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
 const provider = new GoogleAuthProvider();

const login = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      localStorage.setItem("user",JSON.stringify(user))
      alert("DANG NHAP THANH CONG!!");
      window.location.href = "/Main_forum/index.html?#"
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });  
}
export{auth,login}