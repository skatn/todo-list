import React from 'react';
import styles from './Header.module.css';
import { IoMdMoon } from 'react-icons/io';

export default function Header() {
  return (
    <div className={styles.container}>
      <IoMdMoon size='24' color='#ff8d1b' />
      <div>
        <span className={styles.active}>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
    </div>
  );
}
