"use client";

import { ReactNode } from "react";
import { buttonStyle } from "./Button.css";

export type ButtonProps = {
  appName: string;
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  variant,
  className,
  appName,
  size,
}: ButtonProps) => {
  return (
    <button
      className={buttonStyle}
      onClick={() => alert(`Hello from your ${appName} app!`)}
      size={size}
      variant={variant}
    >
      {children}
    </button>
  );
};
