import React, { useContext } from 'react';
import styles from './Header.module.css';
import { IoMdMoon } from 'react-icons/io';
import { TabContext } from '../../contexts/TabContext';

export default function Header() {
  const { tab, setTab } = useContext(TabContext);

  return (
    <div className={styles.container}>
      <IoMdMoon size='24' color='#ff8d1b' />
      <div>
        <span
          className={tab === 'all' ? styles.active : undefined}
          onClick={() => setTab('all')}
        >
          All
        </span>
        <span
          className={tab === 'active' ? styles.active : undefined}
          onClick={() => setTab('active')}
        >
          Active
        </span>
        <span
          className={tab === 'completed' ? styles.active : undefined}
          onClick={() => setTab('completed')}
        >
          Completed
        </span>
      </div>
    </div>
  );
}
