import React from "react";
import "./section.css";

interface SectionTitleProps {
  className?: string;
  children: JSX.Element;
}

function SectionTitle({
  className,
  children,
}: SectionTitleProps): JSX.Element {
  return (
      <h1 className={`section-title section-title--${className}`}>
        {children}
      </h1>
    )
  }
export { SectionTitle };
