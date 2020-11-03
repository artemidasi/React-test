import React from 'react';
import styles from './textcontent.css';

// Экспортируем элемент в секцию Card
export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData} dir="rtl">
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="#"
            alt="avatar"
          />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организации деятельности
          </a>
      </h2>
    </div>
  );
}
