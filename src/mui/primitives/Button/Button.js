import React from 'react'
import MuiButton from '@mui/material/Button'
import styles from './Button.module.scss'

const Button = ({ children, ...rest }) => {
  return (
    <MuiButton className={styles.button} disableElevation {...rest}>
      {children}
    </MuiButton>
  )
}

export default Button
