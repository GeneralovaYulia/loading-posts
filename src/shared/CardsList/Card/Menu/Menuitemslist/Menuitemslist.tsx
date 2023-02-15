import React from 'react';
import styles from './menuitemslist.css';
import { BlockIcon, CommentsIcon, SaveIcon, ShareIcon, WarningIcon } from '../../../../Icons';
import { EIcons } from '../../../../Icons/setIcon';
import { Icon } from '../../../../Icon';
import ReactDOM from 'react-dom';

interface IMenuItemsListProps {
  postId: string;
}

const classs = styles.menuItem + ' ' + styles.mobileMenuIten;

export function Menuitemslist({ postId }: IMenuItemsListProps) {
  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <>
      <div className={styles.dropdown}>
        <ul className={styles.menuItemsList}>
          <li className={styles.menuItem + ' ' + styles.mobileMenuIten} onClick={() => console.log(postId)}>
            <CommentsIcon />
            <span>Комментарии</span>
          </li>
          <div className={styles.divider + ' ' + styles.mobileMenuIten}></div>
          <li className={styles.menuItem + ' ' + styles.mobileMenuIten}>
            <ShareIcon />
            <span>Поделиться</span>
          </li>
          <div className={styles.divider + ' ' + styles.mobileMenuIten}></div>
          <li className={styles.menuItem}>
            <Icon name={EIcons.block} size={16} />
            <span>Скрыть</span>
          </li>
          <div className={styles.divider}></div>
          <li className={styles.menuItem + ' ' + styles.mobileMenuIten}>
            <SaveIcon />
            <span>Сохранить</span>
          </li>
          <div className={styles.divider + ' ' + styles.mobileMenuIten}></div>
          <li className={styles.menuItem}>
            <WarningIcon />
            <span>Пожаловаться</span>
          </li>
        </ul>
        <button className={styles.closeButton}>Закрыть</button>
      </div>
    </>), node);
}
