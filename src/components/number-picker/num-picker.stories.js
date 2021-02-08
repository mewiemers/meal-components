import "./numpicker.css";
import { createNumberPicker } from "./num-picker.js";

export default {
  title: "Components/Number-Picker",
  parameters: { layout: "centered" },
};

export const numberpick = () => createNumberPicker();
