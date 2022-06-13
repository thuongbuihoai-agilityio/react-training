import React, { memo } from "react";
import "./loading.css";

const Loading: React.FC = memo(() => {
  return (
    <div data-testid="loading-page" className="loading-container">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
});

export default Loading;
