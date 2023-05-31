import React from "react";
import TextInput from "../../atoms/TextInput";
import Button from "../../atoms/Button";
import styles from "./index.module.css";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchInputProps {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchInput = ({ value, onChange, onSubmit }: SearchInputProps) => {
  return (
    <form onSubmit={onSubmit} className={styles["search-form"]}>
      <div className={styles["input-wrapper"]}>
        <TextInput
          value={value}
          placeholder={"Search for products..."}
          onChange={onChange}
          className={styles["search-input"]}
        />
      </div>
      <Button type="submit" className={styles["search-button"]}>
        <AiOutlineSearch className={styles["search-icon"]} />
      </Button>
    </form>
  );
};

export default SearchInput;
