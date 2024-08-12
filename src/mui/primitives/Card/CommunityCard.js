import React from 'react';
import styles from './CommunityCard.module.scss';

const CommunityCard = ({
  tagText = "[G-Tag]",
  collectionName = "[SH-B] Villa Collection",
  propertyName = "[H6] Acorn",
  squareFeet = "3,219",
  beds = "3",
  baths = "2",
  halfBaths = "2",
  garage = "1",
  price = "$399,995",
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <span className={styles.tag}>{tagText}</span>
      </div>
      <div className={styles.cardContent}>
        <h3>{collectionName}</h3>
        <h2>{propertyName}</h2>
        <div className={styles.specs}>
          <div className={styles.specItem}>
            <span className={styles.specValue}>[SH-L]{squareFeet}</span>
            <span className={styles.specLabel}>[B-S] sq. ft.</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specValue}>{beds}</span>
            <span className={styles.specLabel}>beds</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specValue}>{baths}</span>
            <span className={styles.specLabel}>baths</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specValue}>{halfBaths}</span>
            <span className={styles.specLabel}>half-baths</span>
          </div>
          <div className={styles.specItem}>
            <span className={styles.specValue}>{garage}</span>
            <span className={styles.specLabel}>garage</span>
          </div>
        </div>
        <p>[B-B] 1 story condo priced at {price}</p>
        <a href="#" className={styles.viewLink}>[G-L] View Condo Design</a>
      </div>
    </div>
  );
};

export default CommunityCard;