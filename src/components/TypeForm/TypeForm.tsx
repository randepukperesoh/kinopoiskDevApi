import { Select } from "../../Ui/Input/Select";
import { optionsGenre, optionsStatus, optinsАge } from "./TypePageconst";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./TypeForm.module.scss";

interface dataInterface {
  year: string;
  acter: string;
  genres: string;
  status: string;
  kpRating: string;
  ageRating: string;
  limit: string;
  type: string;
}

type formTypes =
  | "year"
  | "acter"
  | "genres"
  | "status"
  | "kpRating"
  | "ageRating"
  | "limit"
  | "type";

type yerasArrType = { value: string; label: string }[];

let yearsArr: yerasArrType = [];

for (let i = 1960; i < 2030; i++) {
  yearsArr.push({ value: String(i), label: String(i) });
}

const FormElements = [
  { options: yearsArr, type: "year" as formTypes, title: "Год выхода" },
  { options: optionsGenre, type: "genres" as formTypes, title: "Жанр" },
  {
    options: optionsStatus,
    type: "status" as formTypes,
    title: "Статус релиза",
  },
  {
    options: optinsАge,
    type: "ageRating" as formTypes,
    title: "Возрастной рейтинг",
  },
];

export const TypeForm: React.FC<{ setParams: Function }> = ({ setParams }) => {
  const { register, handleSubmit } = useForm<dataInterface>();

  const submit: SubmitHandler<dataInterface> = (data) => setParams(data);

  return (
    <form className={styles.filter} onSubmit={handleSubmit(submit)}>
      {FormElements.map((el) => (
        <Select
          key={el.type}
          arr={el.options}
          title={el.title}
          {...register(el.type)}
        />
      ))}
      <input
        className={styles.filter_button}
        type="submit"
        value={"Применить"}
      />
    </form>
  );
};
