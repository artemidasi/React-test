import React from "react";
import { keys } from "../../../webpack.config";
import styles from "./genericlist.css";

interface IItem {
  text: string;
  id: string;
  onClick: (id: string) => void;
  className?: string;
  As?: "a" | "li" | "button" | "div";
  href?: string;
}

interface IMyListProps {
  list: IItem[];
}

export function MyList({list}: IMyListProps) {
  return (
    <ul>
      {list.map((item: any, index: number) => {
        <li onClick={() => item.onClick(item.id)} key={item.id}>
          {item.text}
        </li>
      })}
    </ul>
  );
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = "div", text, onClick , className, id, href}) => (
        <As className={className} onClick={() => onClick(id)} key={id} href={href}>
          {text}
        </As>
      ))}
    </>
  );
}
