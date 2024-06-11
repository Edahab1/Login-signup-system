//sign in page variables
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const signInBtn = document.getElementById("signIn")
const signInError = document.getElementById("signInError")
const welcome = document.getElementById("welcome")
console.log(welcome)

//sign in button on click function behavior
signInBtn.addEventListener("click", function () {
  const email = signInEmail.value;
  const password = signInPassword.value;

  const user = userData.find(user => user.email.toLowerCase() === email.toLowerCase());

  if (user) {
    if (user.password === password) {
      console.log("Sign in successful");
      localStorage.setItem("currentUser", JSON.stringify(user))
        
      window.location.href = "welcome.html";
    } else {
      alert("Incorrect password");
    }
  } else {
    alert("This is not a user");
}
});

function pressEnter (e, button){
  if (e.key == "Enter"){
    button.click()
  }
}

document.addEventListener("keypress", function(e){
  pressEnter(e, signInBtn)
})