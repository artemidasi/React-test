import React from 'react';
import styles from './text.css';
import classnames from 'classnames';

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum Ecolor {
  black = "black",
  orange = "orange",
  green = "green",
  white = "white",
  greyF4 = "grayF4",
  greyF3 = "grayF3",
  greyD9 = "greyD9",
  greyC4 = "greyC4",
  grey99 = "grey99",
  grey66 = "grey66",
}

interface ItextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  children?: React.ReactNode;
  size: Tsizes;
  modileSize?: Tsizes;
  tabletSize?: Tsizes;
  desktopSize?: Tsizes;
  color?: Ecolor;
}

export function Text(props: ItextProps) {
  const { 
    As = 'span',
    color = Ecolor.black,
    children, size,
    modileSize,
    tabletSize,
    desktopSize 
  } = props;
  const classes = classnames(
    styles[`s${size}`],
    styles[color],
    { [styles[`m${modileSize}`]]: modileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
