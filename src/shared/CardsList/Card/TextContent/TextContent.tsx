import React, { FC } from 'react';

import { Title } from './Title';

import styles from './textcontent.css';
import { ICard } from '../../../../hooks/usePostData';

// Экспортируем элемент в секцию Card
export const TextContent: FC<ICard> = (props) => {
  const { postInfo } = props

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData} dir="rtl">
        <Title title={postInfo.title} />
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="#"
            alt="avatar"
          />
          <a href="#user-url" className={styles.username}>{postInfo.author}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад
        </span>
      </div>
    </div>
  );
}
