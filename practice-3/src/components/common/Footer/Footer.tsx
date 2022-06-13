import React, { memo } from "react";
import "./footer.css";

const Footer: React.FC = memo(() => {
  return (
    <footer className="footer">
      <p data-testid="footer" className="footer__contact">
        Copyright © 2022 — Bakery WordPress Theme by Milingona.
      </p>
    </footer>
  );
});

export default Footer;
