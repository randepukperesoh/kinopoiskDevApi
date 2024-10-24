import { ReactNode } from "react";

interface DropDown {
  children: ReactNode;
  content: ReactNode;
}
// удалить или кинуть в стеш, если не буду использовать
export const DropDown: React.FC<DropDown> = ({ children, content }) => {
  return (
    <>
      <button>{children}</button>
      <div>{content} </div>
    </>
  );
};
