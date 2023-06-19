import React, { ReactNode } from "react";

interface TextProps {
  variant?: string; // h1, h2, h3, pなどのテキスト要素の種類
  className?: string;
  children: ReactNode;
}

const Text = ({ variant = "p", className, children }: TextProps) => {
  const Tag = variant as keyof JSX.IntrinsicElements;

  return <Tag className={className}>{children}</Tag>;
};

export default Text;
