import React from "react";
import { keys } from "../../../webpack.config";
import styles from "./genericlist.css";

interface IItem {
  text: string;
  id: string;
  onClick?: (id: string) => void;
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
          {item.value}
        </li>;
      })}
    </ul>
  );
}

export function GenericList({ list }: IMyListProps) {
  return (
    <>
      {list.map(({ As = "div", text, onClick = console.log, className, id, href}) => {
        <As className={className} onClick={() => onClick(id)} key={id} href={href}>
          {text}
        </As>;
      })}
    </>
  );
}
