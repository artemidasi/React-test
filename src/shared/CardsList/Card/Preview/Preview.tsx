import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/14268/screenshots/14485121/media/509132d7ec716d362713ba24f5f87253.png"
      />
    </div>
  );
}
