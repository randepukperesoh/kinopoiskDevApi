import { Link } from "react-router-dom";
import { Button } from "../../Ui/Button/Button";
import { Doc } from "../types";

import styles from "./ListCard.module.scss";

export const ListCard = ({ item }: { item: Doc }) => {
  return (
    <div className={styles.card}>
      <img width="150px" height="300px" src={item.poster?.url} />

      <div className={styles.card_info}>
        <h5 className={styles.card_info_label}>{item.name}</h5>
        <p className={styles.card_info_description}>{item.description}</p>
        <Button
          className={styles.card_info_button}
          label={<Link to={"../../title/" + item.id}>Смотреть</Link>}
        />
      </div>
    </div>
  );
};
