import "./form.css";
import { createRegisterForm } from "./register-forms";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
