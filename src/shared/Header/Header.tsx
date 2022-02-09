import React, { useContext } from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock'
import { TreadTitle } from './TreadTitle';
import { SortBlock } from './SortBlock';

export const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <SearchBlock />
      <TreadTitle />
      <SortBlock />
    </header>
  );
}
