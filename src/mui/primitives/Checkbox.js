import React from 'react'
import MuiCheckbox from '@mui/material/Checkbox'

const Checkbox = ({ children, ...rest }) => {
  return <MuiCheckbox {...rest}>{children}</MuiCheckbox>
}

export default Checkbox
