import classNames from "classnames";
import { GridIcon } from "../assets/GridIcon";
import { ListIcon } from "../assets/ListIcon";
import { Button } from "../Button/Button";

import styles from "./Switcher.module.scss";

interface SwitcherProps {
  typeCard: "list" | "grid";
  setTypeCard: (value: "list" | "grid") => void;
}

export const Switcher = ({ typeCard, setTypeCard }: SwitcherProps) => {
  return (
    <div className={styles.switcher}>
      <Button
        className={classNames(styles.switcher_button, {
          [styles.switcher_button_active]: typeCard === "list",
        })}
        onClick={() => setTypeCard("list")}
        label={<ListIcon />}
      />

      <Button
        className={classNames(styles.switcher_button, {
          [styles.switcher_button_active]: typeCard === "grid",
        })}
        onClick={() => setTypeCard("grid")}
        label={<GridIcon />}
      />
    </div>
  );
};
