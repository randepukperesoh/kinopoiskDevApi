import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  label: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
