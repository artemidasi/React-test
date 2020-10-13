import React from 'react';
import styles from './layout.css';

interface ILayputProps {
  children?: React.ReactNode;
}

export function Layout({children}: ILayputProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
