import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({ children, ...rest }) => {
  return (
    <div>
      <input type='checkbox' className={styles.checkbox} {...rest} />
      {children}
    </div>
  );
};

export default Checkbox;
