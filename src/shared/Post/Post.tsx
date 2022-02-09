import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CommentForm } from '../CommentForm';

import styles from './post.css';

interface IPostProps {
  onClose?: () => void
}

export const Post= (props: IPostProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const { onClose } = props

  const node = document.querySelector('#modal_root')

  const handleClick = useCallback((event: MouseEvent) => {
    if (event.target instanceof Node && !ref.current?.contains(event.target)) onClose?.()
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  if (!node) return null

  return createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Титул</h2>
      <div className={styles.content}>
        <p>1123123123123123123132132</p>
        <p>1123123123123123123132132</p>
        <p>1123123123123123123132132</p>
      </div>
      <CommentForm />
    </div>
  ), node);
}
