// export function createRegisterForm() {
//   return `
//     <form class="form">
//     <h2>Reset Password</h2>
//     <p>Please enter your email to receive a link to create a new password via email</p>
//     <input placeholder="email"/>
//     <button>Register</button>
//     </form>
//     `;
// }

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const button = document.createElement("button");
  button.innerText = "Reset";
  button.className = "btn-text";

  function register() {
    alert("Registered");
  }
  button.addEventListener("click", register);

  const title = document.createElement("h2");
  title.innerText = "Reset password";
  title.className = "title-text";

  const input = document.createElement("input");
  input.placeholder = "Trag was ein";
  input.className = "input";

  form.append(title, input, button);

  return form;
}
