import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';

interface ITitleProps {
  id?: string;
  title: string;
  subreddit: string;
}

export function Title({ subreddit, id, title }: ITitleProps) {

  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${id}`} className={styles.postLink}>
        {title ? title : 'Следует отметить, что новая модель огранизационной деятельности'}
      </Link>
    </h2>
  );
}
