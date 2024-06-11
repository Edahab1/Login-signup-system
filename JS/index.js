//sign up page variables
const userNameInput = document.getElementById("userName");
const userEmailInput = document.getElementById("userEmail");
const userPasswordInput = document.getElementById("userPassword");
const signUpBtn = document.getElementById("signUp");
const inputs = document.querySelectorAll("input");



//check if email is already used by another user
let userData = JSON.parse(localStorage.getItem("userdata")) || [];

function emailExists(email) {
  return userData.some(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
}

// validation function for the sign up inputs
function validateInputs(element) {
  var regex = {
    userName: /^[a-z]{3,}$/i,
    userEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    userPassword: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
  };

  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    console.log("Match");
    element.nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    console.log("No Match");
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.replace("d-none", "d-block");
  }
}

// sign up button on click function behavior

  signUpBtn.addEventListener("click", function () {
    inputs.forEach(function (input) {
      validateInputs(input);
    });
  
    if (
      userNameInput.classList.contains("is-valid") &&
      userEmailInput.classList.contains("is-valid") &&
      userPasswordInput.classList.contains("is-valid")
    ) {
      if (emailExists(userEmailInput.value)) {
        alert("Email already exists");
        userEmailInput.value = null;
        userPasswordInput.value = null;
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
      } else {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        const signUp = {
          username: userNameInput.value,
          email: userEmailInput.value,
          password: userPasswordInput.value,
        };
        userData.push(signUp);
        localStorage.setItem("userdata", JSON.stringify(userData));
        // console.log(userData);
        window.location.href = "login.html"; // redirect to login page
      }
    }
  });
  


function pressEnter (e, button){
  if (e.key == "Enter"){
    button.click()
  }
}

document.addEventListener("keypress", function(e){
  pressEnter(e, signUpBtn)
})