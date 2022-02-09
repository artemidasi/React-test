import React, { FC } from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { ICard } from '../../../hooks/usePostData';

export const Card: FC<ICard> = (props) => {
  const { postInfo } = props
  return (
    <li className={styles.card}>
      <TextContent postInfo={postInfo} />
      <Preview url={postInfo.preview ? postInfo.preview.images[0].source.url : '#'} />
      <Menu />
      <Controls />
    </li>
  );
}
