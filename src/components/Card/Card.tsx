import { Link } from "react-router-dom";
import { Doc } from "../types";

import styles from "./Card.module.scss";

const EXAMPLE_URL =
  "https://image.openmoviedb.com/kinopoisk-images/10592371/89311bd4-3ec1-40cb-aaf4-339bbe7bbe17/orig";

const Card = ({ item }: { item: Doc }) => {
  return (
    <Link className={styles.link} to={"../../title/" + item.id}>
      <div className={styles.card}>
        <img width={130} height={180} src={item.poster?.url || EXAMPLE_URL} />
      </div>
    </Link>
  );
};

export default Card;
