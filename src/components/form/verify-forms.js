import { createElement } from "../../utilities/createElement";

function createInputElement() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "number",
    maxLength: 1,
    min: 0,
    max: 9,
  });
}
// Attention -name must be equal with stories.js
export function createVerifyForm() {
  const inputfield1 = createInputElement();
  const inputfield2 = createInputElement();
  const inputfield3 = createInputElement();
  const inputfield4 = createInputElement();

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 0171*****12 to reset your password",
      }),
      createElement("div", {
        className: "form__otp",
        children: [inputfield1, inputfield2, inputfield3, inputfield4],
      }),
      createElement("input", {
        type: "submit",
        innerText: "Next",
        className: "btn",
      }),
      createElement("p", {
        innerText: "Didn't Receive?",
        className: "form__hint",
        children: [
          createElement("a", {
            innerText: "Click here!",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        inputfield1.value +
        inputfield2.value +
        inputfield3.value +
        inputfield4.value;

      if (password === "1234") {
        alert("Gewonnen!");
      } else {
        alert("Das war leider nix!");
      }
    },
  });
}
