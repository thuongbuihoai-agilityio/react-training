import { LogoProps } from "@/types/logo";
import React, { memo } from "react";
import "./logo.css"

const Logo: React.FC<LogoProps> = ({
  href,
  src,
  alt
}) => {

  return (
    <a href={href}>
      <img className="logo" src={src} alt={alt} />
    </a>
  );
}

export default memo(Logo);
