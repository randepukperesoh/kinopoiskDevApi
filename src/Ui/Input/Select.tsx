import React from "react";

import styles from "./Select.module.scss";

interface Option {
  value: string;
  label: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  arr: Option[];
  title: string;
}

export const Select: React.FC<InputProps> = ({ arr, title, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.wrapper_label}>{title}</label>
      <select className={styles.wrapper_select} {...rest}>
        {arr.map((item, i) => (
          <option key={title + i} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
