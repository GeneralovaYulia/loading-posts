import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { IUserData } from '../../../store/me/actions';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
  useUserData();
  const data = useSelector<RootState, IUserData>(state => state.me.data);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
