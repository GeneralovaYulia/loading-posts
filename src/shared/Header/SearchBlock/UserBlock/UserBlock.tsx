import React from 'react';
import styles from './userblock.css';
import { EColor } from '../../../Text';
import { Text } from '../../../Text';
import { IconAnon } from '../../../Icons';
import { Break } from '../../../Break';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=pbSvuvy4wt1bPvT9f2BDQA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <IconAnon />
        }

      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
