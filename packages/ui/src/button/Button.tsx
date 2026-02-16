"use client";

import { ReactNode } from "react";
import { baseButtonStyle, variantStyles, sizeStyles } from "./Button.css";

export type ButtonProps = {
  appName: string;
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className,
  appName,
}: ButtonProps) => {
  const combinedClassName =
    `${baseButtonStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`.trim();

  return (
    <button
      className={combinedClassName}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
