import React, { useMemo, useState } from 'react';
import styles from './Tabs.module.scss';

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const CurrentTabContent = useMemo(() => {
    return tabs[selectedTab].content;
  }, [selectedTab]);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabTitleContainer}>
        {tabs.map((tab, index) => {
          return (
            <>
              <div
                key={index}
                className={`${styles.tabItem} ${selectedTab === index ? styles.selected : ''}`}
                onClick={() => setSelectedTab(index)}
              >
                {tab.title}
                <div className={styles.selectionBar} />
              </div>
            </>
          );
        })}
      </div>
      <CurrentTabContent />
    </div>
  );
};

export default Tabs;
