import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#3730a3", // Indigo
    secondary: "#f43f5e", // Rose
    text: "#1f2937", // Gray-800
    background: "#ffffff",
  },
  space: {
    small: "4px",
    medium: "8px",
    large: "16px",
  },
});
