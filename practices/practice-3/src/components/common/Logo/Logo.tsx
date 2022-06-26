import React, { memo } from "react";
import { LogoProps } from "@common-types/logo";
import { Link } from "react-router-dom";
import "./logo.css";

const Logo: React.FC<LogoProps> = memo(({ src, alt }) => {
  return (
    <Link data-testid="logo" to="/">
      <img className="logo" src={src} alt={alt} />
    </Link>
  );
});

export default Logo;
