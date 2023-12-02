import { login } from "./firebase_auth.js";
console.log(login);
const loginbtn = document.getElementById("login_btn");
loginbtn.addEventListener("click", () => {
    login()
})