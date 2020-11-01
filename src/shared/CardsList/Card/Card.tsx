import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Controls } from './Controls';

export function Card() {
  return (
    <li className={styles.card}>
      {/* Подгружаем элемент текстового контекта из папки TextContent */}
      <TextContent />
      {/* Оставляем этот элемент и не выносим его отдельно, так как он мал */}
      <div className={styles.preview}>
        <img
          className={styles.previewImg}
          src="https://cdn.dribbble.com/users/14268/screenshots/14485121/media/509132d7ec716d362713ba24f5f87253.png"
        />
      </div>
      {/* Оставляем этот элемент и не выносим его отдельно, так как он мал */}
      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
          </svg>
        </button>
      </div>
      {/* Подгружаем элемент Controls из другого файла */}
      <Controls />
    </li>
  );
}
