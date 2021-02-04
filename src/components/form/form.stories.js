import "./form.css";
import { createRegisterForm } from "./register-forms";
import { createVerifyForm } from "./verify-forms";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
export const verify = () => createVerifyForm();
