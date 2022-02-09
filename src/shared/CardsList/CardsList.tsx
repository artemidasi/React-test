import React, { useContext, FC } from 'react';

import { Card } from './Card';

import { postContext } from '../../context/postContext';

import styles from './cardslist.css';

export const CardsList: FC = () => {
  const posts = useContext(postContext)

  return (
    <ul className={styles.cardsList}>
      {
        posts.length ?
          posts.map((post, index) => {
            return <Card key={index} postInfo={post.data} />
          }) : (
            <h2 className={styles.other}>Авторизируйтесь, чтобы просматривать посты</h2>
          )
      }
    </ul>
  );
}
