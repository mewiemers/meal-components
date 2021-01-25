import "./button.css";
import buttonborder from "./button-border.html";
import buttonfilled from "./button-filled.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const border = () => buttonborder;
export const filled = () => buttonfilled;
