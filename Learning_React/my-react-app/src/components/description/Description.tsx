import React from "react";
import "./style.css";

interface DescriptionProps {
  className?: string;
  children: string | JSX.Element;
}

function Description({ className, children }: DescriptionProps): JSX.Element {
  return (
      <p className={`main__text main__text--${className}`}> {children} </p>
    )
  }
export { Description };