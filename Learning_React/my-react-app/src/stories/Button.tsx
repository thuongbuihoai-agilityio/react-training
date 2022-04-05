import React from "react";
import "./button.css";

interface ButtonProps {
  variant?: boolean;
  children: string,
  label: string,
  backgroundColor?: string;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = true,
  label,
  backgroundColor,
}: ButtonProps) => {
  const mode = variant ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button`, mode].join(" ")}
      style={{ backgroundColor }}
    >
      {label}
    </button>
  );
};
