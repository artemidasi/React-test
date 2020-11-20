import React from "react";
import { keys } from "../../../webpack.config";
import styles from "./genericlist.css";

interface IItem {
  text: string;
  id: string;
  onclick: (id: string) => void;
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
      {list.map(({ As = "div", text, onclick = console.log, className, id, href}) => {
        <As className={className} onClick={() => onclick(id)} key={id} href={href}>
          {text}
        </As>;
      })}
    </>
  );
}
