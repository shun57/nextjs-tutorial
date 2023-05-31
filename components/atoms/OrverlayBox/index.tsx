import React from "react";

interface OverlayBoxProps {
  children: React.ReactNode;
  className?: string;
}

const OverlayBox = ({ children, className }: OverlayBoxProps) => {
  const defaultStyle = {
    background: "black",
    color: "white",
    padding: "1rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "1.75rem",
  };
  return (
    <div className={className}>
      <div style={{ ...defaultStyle }}>{children}</div>
    </div>
  );
};

export default OverlayBox;
