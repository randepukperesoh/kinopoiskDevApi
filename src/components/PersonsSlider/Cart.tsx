import { Person } from "../types";

import styles from "./InfinitySlider.module.scss";

export const Cart = ({ item }: { item: Person }) => {
  return (
    <div className={styles.personsCard}>
      <img width={100} src={item.photo} alt="person photo" />
      <label className={styles.personsCardLabel}>{item.name}</label>
    </div>
  );
};
