function createOTPInput() {
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "*";
  input.className = "input";
  input.maxLength = "1";

  return input;
}

function createHeadLine() {
  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";
  title.className = "title-text";

  return title;
}
function createbutton() {
  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  return button;
}
function createinfotext() {
  const infotext = document.createElement("p");
  infotext.innerText =
    "Please check your mobile number 017*****12 continue to reset your password";

  return infotext;
}
function createPasswordContainerElement() {
  const passwordContainer = document.createElement("div");
  passwordContainer.className = "form__otp";
  const field1 = createOTPInput();
  const field2 = createOTPInput();
  const field3 = createOTPInput();
  const field4 = createOTPInput();
  passwordContainer.append(field1, field2, field3, field4);

  return passwordContainer;
}

export function createVerifyForms() {
  const verify = document.createElement("form");
  verify.className = "form";

  const button = createbutton();
  function register() {
    alert("Registered");
  }
  button.addEventListener("click", register);

  const title = createHeadLine();
  const infotext = createinfotext();

  const passwordContainer = createPasswordContainerElement();

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
