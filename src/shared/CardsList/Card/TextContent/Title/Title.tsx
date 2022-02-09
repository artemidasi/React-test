import React, { useState, FC } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';

interface ITitle {
  title: string
}

export const Title: FC<ITitle> = (props) => {
  const { title } = props
  const [isModalOpen, setIsOpenModal] = useState(false)

  return (
    <h2 className={styles.title}>
      <button className={styles.postLink} onClick={() => {
        setIsOpenModal(true)
      }}>
        {title}
      </button>

      {isModalOpen && (
        <Post onClose={() => {
          setIsOpenModal(false)
        }} />
      )}
    </h2>
  );
}
