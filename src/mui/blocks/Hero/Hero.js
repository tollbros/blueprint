import * as React from 'react';
import ContactButtons from '../../partials/ContactButtons';
import styles from './Hero.module.scss';

export default function Hero({
  img = 'https://cdn.tollbrothers.com/communities/masters/768/images-resized/Sterling_Grove_Clubhouse_Pool_2352_conversion1_920.jpg',
  logo = null,
  title = null,
  location = null,
  // county = null,
  // startingPrice = null,
  // homeTypes = [],
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.backgroundColor} />
          <img src={img} alt={title} loading='lazy' />
        </div>
        <div className={styles.content}>
          {logo && (
            <div className={styles.logo}>
              <img alt={title} src={logo} />
            </div>
          )}
          <div className={styles.bottom}>
            <div className={styles.location}>
              <div>{location}</div>
            </div>
            <div className={styles.contactButtons}>
              <ContactButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
