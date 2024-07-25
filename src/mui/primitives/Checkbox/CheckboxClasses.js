import * as React from 'react'
import checkboxClasses from '@mui/material/Checkbox/checkboxClasses'
import ClassTable from '../../../storybook/ClassTable'

const ButtonClasses = () => {
  const rows = Object.keys(checkboxClasses).map((classKey) => {
    return {
      name: checkboxClasses[classKey]
    }
  })

  return <ClassTable rows={rows} title='Checkbox Classes' />
}

export default ButtonClasses
