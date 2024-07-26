import React from 'react'
import MuiCheckbox from '@mui/material/Checkbox'
import styles from './Checkbox.module.scss'

const Checkbox = ({ children, ...rest }) => {
  console.log('styles.checkbox', styles.checkbox)
  return (
    <MuiCheckbox className={styles.checkbox} {...rest}>
      {children}
    </MuiCheckbox>
  )
}

export default Checkbox
