import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

export function Card() {
  return (
    <li className={styles.card}>
      {/* Подгружаем элемент текстового контекта из папки TextContent */}
      <TextContent />
      <Preview />
      <Menu />
      {/* Подгружаем элемент Controls из другого файла */}
      <Controls />
    </li>
  );
}
