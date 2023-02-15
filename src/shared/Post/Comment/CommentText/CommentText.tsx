import React, { ChangeEvent, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import styles from './commenttext.css';
import { textCommentContext } from '../../../../context/textCommentContext';

interface ICommentText {
  id?: string;
  author?: string;
  avatar?: string;
  text?: string;
  isOpen?: boolean;
  onClose?: () => void;
  value?: string;
}

export function CommentText(props: ICommentText) {
  const { value, onChange } = useContext(textCommentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmot(event: FormEvent) {
    event.preventDefault();
  }

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return (
    <textarea
      defaultValue={props.author}
      className={styles.commentContainer}
      value={value}
      ref={ref}
      onChange={handleChange}>
    </textarea>
  );
}
