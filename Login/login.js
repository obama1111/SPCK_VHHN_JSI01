import { login, googleP, githubP } from "./firebase_auth.js";

const loginbtn = document.getElementById("login_btn");
loginbtn.addEventListener("click", () => {
    login(googleP)
})

const loginGithubbtn = document.getElementById("login_facebook_btn");
loginGithubbtn.addEventListener("click", () => {
    login(githubP)
})