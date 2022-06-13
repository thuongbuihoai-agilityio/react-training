import React, { memo } from "react";
import { LogoProps } from "@/types/logo";
import "./logo.css";

const Logo: React.FC<LogoProps> = memo(({ href, src, alt }) => {
  return (
    <a data-testid="logo" href={href}>
      <img className="logo" src={src} alt={alt} />
    </a>
  );
});

export default Logo;
