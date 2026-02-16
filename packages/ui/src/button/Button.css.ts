import { style } from "@vanilla-extract/css";
import { vars } from "@repo/theme";

export const buttonStyle = style({
  backgroundColor: vars.color.primary,
  color: "white",
  padding: `${vars.space.medium} ${vars.space.large}`,
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  ":hover": {
    opacity: 0.8,
  },
});
