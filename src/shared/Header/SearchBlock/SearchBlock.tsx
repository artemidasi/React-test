import React, { useContext } from 'react';

import { UserBlock } from './UserBlock';

import styles from './searchblock.css';
import { userContext } from '../../../context/userContext';

export const SearchBlock: React.FC = () => {

  const { name, iconImg } = useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}
