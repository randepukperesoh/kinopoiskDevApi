import { useId, useMemo, useState } from "react";
import { StarIcon } from "../assets/StarIcon";
import styles from "./Rating.module.scss";

export const Rating = ({
  label,
  rating,
}: {
  label: string;
  rating: number;
}) => {
  const [innerRating, setInnerRating] = useState(0);

  const starsArray = useMemo(() => new Array(10).fill(1), []);

  const id = useId();

  return (
    <div className={styles.rating}>
      <div>{label}</div>
      <div className={styles.rating_stars}>
        {/* {starsArray.map((_, i) => (
          <StarIcon
            key={"star" + id + i}
            filled={i <= innerRating || i <= rating}
            onMouseLeave={() => setInnerRating(i)}
            onMouseEnter={() => setInnerRating(0)}
          />
        ))} */}
      </div>
    </div>
  );
};
