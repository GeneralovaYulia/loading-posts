import React from 'react';
import styles from './comment.css';
import { CommentsIcon, IconAnon } from '../../Icons';
import { EColor } from '../../Text';
import { Text } from '../../Text';
import { CommentText } from './CommentText';

interface ICommentProps {
  id?: string;
  author: string;
  avatar?: string;
  text: string;
  isOpen?: boolean;
}

export function Comment({ id, author, avatar, text, isOpen }: ICommentProps) {
  const [isCommentOpen, setIsCommentOpen] = React.useState(false);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsCommentOpen(!isCommentOpen)
    }
  }

  return (
    <li className={styles.comment}>
      <div className={styles.commentName}>
        <div className={styles.avatarBox}>
          {avatar
            ? <img src={avatar} alt="user avatar" className={styles.avatarImage} />
            : <IconAnon />
          }
        </div>
        <div className={styles.username}>
          <Text size={14} color={author ? EColor.black : EColor.orange}>{author || 'Аноним'}</Text>
        </div>
      </div>

      <p className={styles.commentText}>{text}</p>
      <div onClick={handleOpen}>
        <button className={styles.commentsButton}>
          <span className={styles.commentsIcon}><CommentsIcon /></span>
          <span>Ответить</span>
        </button>
      </div>
      {isCommentOpen && (
        <CommentText
          author={author}
          onClose={() => { setIsCommentOpen(false) }}
        />
      )}

    </li>
  );
}
