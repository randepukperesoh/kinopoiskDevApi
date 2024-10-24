import React, { useCallback, useMemo, useState } from "react";
import { ParamsInterface, useGetFilterTitleQuery } from "../../Api/Api";
import { TypeForm } from "../../components/TypeForm/TypeForm";
import { useParams } from "react-router-dom";
import { ErorrPage } from "../ErorrPage/ErorrPage";
import Card from "../../components/Card/Card";
import { Loading } from "../../Ui/Loading/Loading";
import Hamburger from "hamburger-react";
import { Pagination } from "../../Ui/Pagination/Pagination";
import { PopoverMenu } from "../../Ui/PopoverMenu/PopoverMenu";
import { Switcher } from "../../Ui/Switcher/Switcher";
import { ListCard } from "../../components/ListCard/ListCard";

import styles from "./TypePage.module.scss";

export const TypePage: React.FC = () => {
  const [typeCard, setTypeCard] = useState<"list" | "grid">("list");

  const [params, setParams] = useState<ParamsInterface>({
    year: "2000",
    // genres: "комедия",
    // status: "completed",
    // ageRating: "14",
    // limit: "16",
    type: useParams().type!,
    // page: 1,
  });

  const { data, isError, isFetching } = useGetFilterTitleQuery(params);

  const paginationData = useMemo(
    () => ({ page: data?.page ?? 1, pages: data?.pages ?? 1 }),
    [data]
  );

  const handleChangePage = useCallback(
    (value: number) => setParams((prev) => ({ ...prev, page: value })),
    []
  );

  return (
    <div className={styles.typePage}>
      <div className={styles.typePage_filters}>
        <PopoverMenu
          children={(menu, setMenu) => (
            <Hamburger color="#4FD1C5" toggled={menu} toggle={setMenu} />
          )}
          content={<TypeForm setParams={setParams} />}
        />
        <Switcher typeCard={typeCard} setTypeCard={setTypeCard} />
      </div>
      <div className={styles.typePage_titles}>
        {isError && <ErorrPage />}
        {isFetching && <Loading />}
        {data &&
          data.docs.map((item) => {
            return typeCard === "grid" ? (
              <Card item={item} key={item.id} />
            ) : (
              <ListCard item={item} key={item.id} />
            );
          })}
      </div>

      <Pagination onChangePage={handleChangePage} pagination={paginationData} />
    </div>
  );
};
