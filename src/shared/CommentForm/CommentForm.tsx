import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { commentContext } from '../../context/commentContext';

import styles from './commentform.css';

export const CommentForm = () => {
  const { value, onChange } = useContext(commentContext)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} />
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
