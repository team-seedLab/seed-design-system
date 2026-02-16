import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@repo/theme";

// 기본 버튼 스타일
export const baseButtonStyle = style({
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: 500,
  transition: "all 0.2s ease-in-out",
  ":hover": {
    opacity: 0.8,
  },
  ":active": {
    transform: "scale(0.98)",
  },
});

// Variant 스타일
export const variantStyles = styleVariants({
  primary: {
    backgroundColor: vars.color.primary,
    color: "white",
    border: `2px solid ${vars.color.primary}`,
    ":hover": {
      backgroundColor: "#0056b3",
    },
  },
  secondary: {
    backgroundColor: "transparent",
    color: vars.color.secondary,
    border: `2px solid ${vars.color.secondary}`,
    ":hover": {
      backgroundColor: "rgba(244, 63, 94, 0.1)",
    },
  },
});

// Size 스타일
export const sizeStyles = styleVariants({
  small: {
    padding: `${vars.space.small} ${vars.space.medium}`,
    fontSize: "12px",
  },
  medium: {
    padding: `${vars.space.medium} ${vars.space.large}`,
    fontSize: "16px",
  },
  large: {
    padding: `${vars.space.large} ${vars.space.large}`,
    fontSize: "18px",
  },
});

export const buttonStyle = baseButtonStyle;
