import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps{
  id?: string;
  title: string;
  author: string;
  postContent: string;
  rating: number;
  avatar: string;
  previewImg: string;
  subreddit: string;
}

export function Card({subreddit, id, author, title, rating, avatar, previewImg}: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent subreddit={subreddit} id={id} author={author} title={title} avatar={avatar} />
      <Preview previewImg={previewImg} />
      <Menu />
      <Controls rating={rating} />
    </li>
  );
}
