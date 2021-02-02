export function createVerifyForms() {
  const verify = document.createElement("form");
  verify.className = "form";

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  function register() {
    alert("Registered");
  }
  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";
  title.className = "title-text";

  const infotext = document.createElement("p");
  infotext.innerText =
    "Please check your mobile number 017*****12 continue to reset your password";

  const field1 = document.createElement("input");
  field1.placeholder = "*";
  field1.className = "input";
  field1.type = "password";

  const field2 = document.createElement("input");
  field2.placeholder = "*";
  field2.className = "input";
  field2.type = "password";

  const field3 = document.createElement("input");
  field3.placeholder = "*";
  field3.className = "input";
  field3.type = "password";

  const field4 = document.createElement("input");
  field4.placeholder = "*";
  field4.className = "input";
  field4.type = "password";

  const passwordContainer = document.createElement("div");
  passwordContainer.className = "form__otp";
  passwordContainer.append(field1, field2, field3, field4);

  const hint = document.createElement("p");
  hint.innerText = "Didn`t Receive?";
  hint.className = "form__hint";
  const forgotpw = document.createElement("a");
  forgotpw.innerText = "Click here";
  forgotpw.href = "#";

  hint.append(forgotpw);

  verify.append(title, infotext, passwordContainer, button, hint);

  return verify;
}
