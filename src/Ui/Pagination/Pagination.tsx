import { useMemo } from "react";
import { Button } from "../Button/Button";

import styles from "./Pagination.module.scss";
import { NextIcon } from "../assets/NextIcon";

export const Pagination = ({
  pagination,
  onChangePage,
}: {
  pagination: { page: number; pages: number };
  onChangePage: (value: number) => void;
}) => {
  const { page, pages } = pagination;

  const a = useMemo(
    () => Array.from({ length: pages }, (_, i) => page + i),
    [pages, page]
  );

  return (
    <div className={styles.pagination}>
      <Button
        onClick={() => onChangePage(1)}
        className={styles.pagination_button}
        label={"<<"}
      />
      <Button
        onClick={() => onChangePage(page - 1)}
        disabled={page === 1}
        className={styles.pagination_button}
        label={"<"}
      />
      <div className={styles.pagination_numbers}>
        {a.map((el) => (
          <Button
            key={"btn_" + el}
            onClick={() => onChangePage(el)}
            className={styles.pagination_button}
            label={String(el)}
          />
        ))}
      </div>

      <Button
        onClick={() => onChangePage(page + 1)}
        className={styles.pagination_button}
        disabled={page === pages}
        label={">"}
      />
      <Button
        onClick={() => onChangePage(pages)}
        className={styles.pagination_button}
        label={">>"}
      />
    </div>
  );
};
