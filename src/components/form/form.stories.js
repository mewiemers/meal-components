import "./form.css";
import { createRegisterForm } from "./register-forms";
import { createVerifyForms } from "./verify-forms";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
export const verify = () => createVerifyForms();
