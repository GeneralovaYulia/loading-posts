import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { Menuitemslist } from './Menuitemslist';
import { MenuIcon } from '../../../Icons';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <Menuitemslist postId='1234' />

      </Dropdown>

    </div>
  );
}
