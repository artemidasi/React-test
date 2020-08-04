import {hot} from "react-hot-loader/root";
import * as React from "react";
import styles from "./Header.less";

function HeaderComponent() {
  return (
    <header>
      <h1 className = {styles.example}>Reddit fot our own user 12312142</h1>
    </header>
  )
}

export const Header = hot(HeaderComponent);