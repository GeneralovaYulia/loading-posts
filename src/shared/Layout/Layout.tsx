import React, { useEffect } from 'react';
import styles from './layout.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setToken } from '../../store/store';
import { saveToken, saveTokenAsync } from '../../store/me/actions';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  const token = useSelector<RootState, string>(state => state.token);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(saveTokenAsync());
  }, []);

  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
