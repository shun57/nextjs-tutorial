import React from "react";
import Image from "next/image";

interface LogoProps {
  text?: string;
}

const Logo = ({ text }: LogoProps) => {
  return (
    <div>
      <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
      {text && <span>{text}</span>}
    </div>
  );
};

export default Logo;
