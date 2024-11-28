import React from "react";
// import "./styles.css";

interface LogoProps {
  logo: string
}

export default function Logo({ logo }: LogoProps): JSX.Element {
  return (
    <img className="logo" src={logo} alt="XCompany logo" />
  );
}