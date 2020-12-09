const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const sendData = (count, formCon, usernameVal) => {
  if (count === formCon.length) {
    alert("registration successful ");
    swal("Welcome! " + usernameVal, " Registration Successful", "success");
  }
};

const successMsg = (usernameVal) => {
  var count = 0;
  var formCon = document.getElementsByClassName("form-control");
  for (let i = 0; i < formCon.length; i++) {
    if (formCon[i].className !== "form-control success") {
      break;
    } else {
      count++;
      //   console.log(count);
    }
  }
  sendData(count, formCon, usernameVal);
};

const checkEmail = (email) => {
  var atSymbol = email.indexOf("@");
  var dot = email.lastIndexOf(".");
  if (
    atSymbol < 1 ||
    dot === atSymbol + 5 ||
    dot + 1 === email.length ||
    dot + 2 == email.length ||
    dot + 4 < email.length
  ) {
    return true;
  } else {
    return false;
  }
};

function setErrorMsg(input, errMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errMessage;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validate() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const confirm_passwordVal = confirm_password.value.trim();

  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length < 3) {
    setErrorMsg(username, "username should have minimum 3 character");
  } else {
    setSuccessMsg(username);
  }

  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (checkEmail(emailVal)) {
    setErrorMsg(email, "Not a valid email");
  } else {
    setSuccessMsg(email);
  }

  if (phoneVal === "") {
    setErrorMsg(phone, "phone number cannot be blank");
  } else if (phoneVal.length != 10) {
    setErrorMsg(phone, "Not a valid phone number");
  } else {
    setSuccessMsg(phone);
  }
  if (passwordVal === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length < 6) {
    setErrorMsg(password, "password length should be minimum 6 character");
  } else {
    setSuccessMsg(password);
  }
  if (confirm_passwordVal === "") {
    setErrorMsg(confirm_password, "confirm password cannot be blank");
  } else if (confirm_passwordVal !== passwordVal) {
    setErrorMsg(confirm_password, "password are not matching");
  } else {
    setSuccessMsg(confirm_password);
  }
  successMsg(usernameVal);
}
