import React, { useState } from 'react';
import Checkbox from '../components/Checkbox/Checkbox';
import RangeSlider from '../components/RangeSlider/RangeSlider';
import SpecsSelector from '../components/SpecsSelector/SpecsSelector';
import styles from './MobileSearchFilter.module.scss';

const MobileSearchFilterStory = ({ viewportWidth = 375 }) => {
  const [collectionSelections, setCollectionSelections] = useState([true, true]);
  const allSelected = collectionSelections.every(Boolean);

  const handleCollectionChange = (index) => (nextChecked) => {
    setCollectionSelections((prev) => {
      const next = [...prev];
      next[index] = nextChecked;
      return next;
    });
  };

  const handleShowAllChange = (nextChecked) => {
    setCollectionSelections((prev) => prev.map(() => nextChecked));
  };

  return (
    <div className={styles.screen} style={{ width: `${viewportWidth}px` }}>
      <header className={styles.header}>
        <button className={styles.closeButton} type='button' aria-label='Close filter'>
          ×
        </button>
      </header>
      <div className={styles.body}>
        <section className={styles.section}>
          <div className={styles.sectionLabel}>2 Available Collections</div>
          <div className={styles.collectionRow}>
            <div className={styles.collectionText}>
              <div className={styles.collectionName}>Siena Collection</div>
              <div className={styles.collectionSubtext}>
                Single-Family Homes Anticipated From the $1,200,000s
              </div>
            </div>
            <Checkbox checked={collectionSelections[0]} onChange={handleCollectionChange(0)} />
          </div>
          <div className={styles.collectionRow}>
            <div className={styles.collectionText}>
              <div className={styles.collectionName}>Juniper Collection</div>
              <div className={styles.collectionSubtext}>
                Single-Family Homes Anticipated From the $1,400,000s
              </div>
            </div>
            <Checkbox checked={collectionSelections[1]} onChange={handleCollectionChange(1)} />
          </div>
          <div className={styles.showAllRow}>
            <span className={styles.showAllText}>Show All</span>
            <Checkbox checked={allSelected} onChange={handleShowAllChange} />
          </div>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Price Range</div>
          <RangeSlider
            property1='price'
            priceRange={{ min: 500000, max: 1600000 }}
            stepPrice={100000}
          />
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Square Feet</div>
          <RangeSlider
            sqFtRange={{ min: 750, max: 2750 }}
            stepSqFt={250}
          />
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Bedrooms</div>
          <div className={styles.specsRow}>
            <SpecsSelector />
          </div>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Bathrooms</div>
          <div className={styles.specsRow}>
            <SpecsSelector />
          </div>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Half Baths</div>
          <div className={styles.specsRow}>
            <SpecsSelector />
          </div>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Stories</div>
          <div className={styles.specsRow}>
            <SpecsSelector />
          </div>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <div className={styles.sectionTitle}>Garages</div>
          <div className={styles.specsRow}>
            <SpecsSelector maxSpecs={3} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default {
  title: 'Screens/MobileSearchFilter',
  component: MobileSearchFilterStory,
  parameters: {
    layout: 'centered',
  },
  args: {
    viewportWidth: 375,
  },
  argTypes: {
    viewportWidth: {
      control: { type: 'number', min: 280, max: 480, step: 1 },
    },
  },
};

export const Default = {
  render: (args) => <MobileSearchFilterStory {...args} />,
};
