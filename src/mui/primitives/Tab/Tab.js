import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import styles from './Tab.module.scss';

const Tab = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${styles.tabItem} ${selectedTab === index ? styles.selected : ''}`}
          onClick={() => setSelectedTab(index)}
        >
          {tab}
          <div className={styles.selectionBar} />
        </div>
      ))}
    </div>
  );
};

export default Tab;