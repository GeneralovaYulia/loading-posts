import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';

interface ITextContentProps {
  id?: string;
  title: string;
  author: string;
  avatar: string;
  subreddit: string;
}

export function TextContent({subreddit, id, author, title, avatar} : ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
        <img className={styles.avatar}
          src={
            avatar ?
            avatar :
            "https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png"
          } alt="avatar" />
        <a className={styles.username} href="#user-url">{author ? author : 'Дмитрий Веришин'}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликованно </span>
          4 часа назад
        </span>
      </div>
      <Title subreddit={subreddit} id={id} title={title} />
    </div>
  );
}
