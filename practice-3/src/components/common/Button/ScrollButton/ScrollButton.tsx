import React, { memo, useEffect, useState } from "react";
import { ButtonProps } from "@/types/button";
import "../button.css";

const ScrollButton: React.FC<ButtonProps> = memo(({ text }) => {
  // create state to handle back to top
  const [btnOnTop, setBtnOnTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setBtnOnTop(!btnOnTop);
      } else {
        setBtnOnTop(btnOnTop);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <button
      data-testid="back-to-top"
      className="btn__backToTop"
      onClick={scrollToTop}
    >
      {text}
    </button>
  );
});

export default ScrollButton;
