import React from "react";

interface TextInputProps {
  value: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  value,
  placeholder,
  className,
  onChange,
}: TextInputProps) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default TextInput;
