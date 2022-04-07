import React from "react";
import "./footer.css";

interface FooterProps {
  copyrightInfo: string;
}

export default function Footer({ copyrightInfo }: FooterProps): JSX.Element {
  return (
    <footer className="footer">
      <p className="footer__copyright"> {copyrightInfo} </p>
    </footer>
  );
}
