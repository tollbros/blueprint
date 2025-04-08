import React from 'react';
import styles from './CommunityCard.module.scss';

const CommunityCard = ({
  tagText = 'Tag',
  collectionName = 'Villa Collection',
  propertyName = 'Acorn',
  squareFeet = '3,219',
  beds = '3',
  baths = '2',
  halfBaths = '2',
  garage = '1',
  price = '$399,995',
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <span className={styles.tag}>{tagText}</span>
      </div>
      <div className={styles.cardContent}>
        <span className={styles.collectionName}>{collectionName}</span>
        <span className={styles.propertyName}>{propertyName}</span>
        <div className={styles.specs}>
          <div className={styles.specItem}>
            <span className={styles.specValue}>{squareFeet}</span>
            <span className={styles.specLabel}>sq. ft.</span>
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
        <prodLabel>1 story condo priced at {price}</prodLabel>
        <a href='#' className={styles.viewLink}>
          View Condo Design
        </a>
      </div>
    </div>
  );
};

export default CommunityCard;
