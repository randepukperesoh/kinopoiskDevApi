import { useGetImageByIdQuery, useGetRandomMovieQuery } from "../../Api/Api";
import { Link } from "react-router-dom";
import TitleSlider from "../../Ui/Spiner/TitleSlider";
import { ErorrPage } from "../ErorrPage/ErorrPage";
import { Loading } from "../../Ui/Loading/Loading";
import { Button } from "../../Ui/Button/Button";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  const { data, isError, isLoading } = useGetRandomMovieQuery(null);

  const id = data?.id;

  const { data: imageData } = useGetImageByIdQuery(id, {
    skip: !id,
  });

  const url = imageData?.docs[0]?.url;

  if (isLoading) return <Loading />;

  if (isError) return <ErorrPage />;

  return (
    <div style={{ backgroundImage: `url(${url}` }} className={styles.home}>
      <div className={styles.home_title}>
        <h2 className={styles.home_title_head}>{data!.name}</h2>
        <div className={styles.home_title_description}>{data!.description}</div>
        <Button
          className={styles.home_title_btn}
          label={<Link to={"/title/" + id}>Смотреть</Link>}
        />
      </div>

      <div className={styles.home_slider}>
        <TitleSlider type="movie" />
      </div>
    </div>
  );
};
