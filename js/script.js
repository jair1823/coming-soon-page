let email;
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const imageError = document.querySelector(".image-error");
const msgError = document.querySelector(".error-msg");
const input = document.querySelector("input");
input.addEventListener("input", updateValue);

window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = submit;
};

function updateValue(e) {
  email = e.target.value;
  console.log(email);
}

function validateEmail() {
  if (email == "" || !mailformat.test(email)) {
    imageError.classList.add("show");
    msgError.classList.add("show");
  } else {
    imageError.classList.remove("show");
    msgError.classList.remove("show");
    input.value = "";
    email = "";
  }
}

function submit(e) {
  e.preventDefault();
  validateEmail();
}
