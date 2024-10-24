import { useParams } from "react-router-dom";
import { useGetTitleByIdQuery } from "../../Api/Api";
import PersonsSlider from "../../components/PersonsSlider/PersonsSlider";
import { Loading } from "../../Ui/Loading/Loading";
import { Rating } from "../../Ui/Rating/Rating";

import styles from "./TitlePage.module.scss";

export const TitlePage = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetTitleByIdQuery(Number(id));

  if (isFetching) {
    return <Loading />;
  }
  if (!data) {
    return null;
  }
  const {
    description,
    name,
    poster,
    year,
    genres,
    rating,
    watchability,
    persons,
  } = data;

  return (
    <div className={styles.title}>
      <img className={styles.title_img} src={poster.url} />
      <div className={styles.title_info}>
        <div className={styles.title_info_label}>{name}</div>
        <p className={styles.title_info_description}>{description}</p>

        <div className={styles.title_info_smallInfo}>
          <label>{year}</label>
          {genres.map((genre) => (
            <label>{genre.name}</label>
          ))}
        </div>
      </div>

      <div className={styles.title_rating}>
        {Object.keys(rating).map((el) => (
          <Rating label={el} rating={rating[el as keyof typeof Rating]} />
        ))}
      </div>

      {watchability.items.length > 0 && (
        <div className={styles.title_watch}>
          {watchability.items.map((item) => (
            <div className={styles.title_watch_card}>
              <a href={item.url}>
                <img width={52} height={52} src={item.logo.url} />
              </a>
            </div>
          ))}
        </div>
      )}

      {data.persons && (
        <div className={styles.title_personsBlock}>
          <label>Актеры</label>
          <PersonsSlider carts={persons} />
        </div>
      )}
    </div>
  );
};
