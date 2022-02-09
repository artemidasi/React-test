import React, {FC} from 'react';
import styles from './preview.css';

export interface IPreview {
  url: string
}

export const Preview: FC<IPreview> = (props) => {
  const { url } = props
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={url}
      />
    </div>
  );
}
