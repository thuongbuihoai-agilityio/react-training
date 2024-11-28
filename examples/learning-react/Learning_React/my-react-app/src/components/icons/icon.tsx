import React from "react";
import "./icon.css";

interface FeatureIconProps {
  className: string
}

export default function FeatureIcon({ className }: FeatureIconProps): JSX.Element {
  return (
    <span className={`feature-icon feature-icon--${className}`} />
  );
}
