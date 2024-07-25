import * as React from 'react'
import buttonClasses from '@mui/material/Button/buttonClasses'
import ClassTable from '../../../storybook/ClassTable'

const ButtonClasses = () => {
  const rows = Object.keys(buttonClasses).map((classKey) => {
    return {
      name: buttonClasses[classKey]
    }
  })

  return <ClassTable rows={rows} title='Button Classes' />
}

export default ButtonClasses
