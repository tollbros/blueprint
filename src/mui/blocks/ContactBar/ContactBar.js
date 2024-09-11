import React from 'react';
import styles from './ContactBar.module.scss';

const ContactBar = ({
  primaryContactImage,
  primaryContactTitle,
  primaryContacts,
  primaryPhone,
  salesImage,
  salesTitle,
  salesStreet,
  salesLocation,
}) => {
  return (
    <section className={styles.contactBar}>
      <div className={styles.inner}>
        <div className={styles.alpha}>
          <div className={styles.alphaContainer}>
            <div className={styles.alphaInner}>
              <img alt={primaryContactTitle} src={primaryContactImage} />
              <p className={styles.title}>{primaryContactTitle}</p>
            </div>
            <div className={styles.alphaInner}>
              <p>{primaryContacts}</p>
            </div>
            <div className={styles.alphaInner}>
              <p>{primaryPhone}</p>
            </div>
          </div>
        </div>
        <div className={styles.alpha}>
          <div className={styles.alphaContainer}>
            <div className={styles.alphaInner}>
              <img alt={salesTitle} src={salesImage} />
              <p className={styles.title}>{salesTitle}</p>
            </div>
            <div className={styles.alphaInner}>
              <p>{salesStreet}</p>
            </div>
            <div className={styles.alphaInner}>
              <p>{salesLocation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
