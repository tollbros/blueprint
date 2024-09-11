import * as React from 'react';
import styles from './ContactButtons.module.scss';
import Button from '../primitives/Button/Button';

const ContactButtons = () => {
  return (
    <div className={styles.contactButtons}>
      <Button color='contrast'>Contact Sales</Button>
      <Button>Schedule a Tour</Button>
    </div>
  );
};

export default ContactButtons;
