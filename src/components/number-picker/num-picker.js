import { createElement } from "../../utilities/createElement";

export function createNumberPicker() {
  let value = 5;
  //   function xxx() {
  //     alert("Hallo");
  //   }
  return createElement("div", {
    children: [
      createElement("h5", {
        innerText: "Number of Portions",
      }),
      createElement("button", {
        className: "btn--mp",
        innerText: "-",
        // onclick: xxx(),
        // function: hey() {
        //     alert("Hallo")

        // },
      }),
      createElement("input", {
        type: "number",
        className: "input-number",
        value: value,
      }),
      createElement("input", {
        className: "btn--mp",
        // innerText: "+",
        value: value,
        type: "button",
        onclick: function () {
          alert("Click");
        },
      }),
    ],
    // onclick: function () {
    //   alert("Hallo");
    // ,}
  });
}
