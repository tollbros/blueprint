import * as React from 'react'
import styles from './Checkbox.module.scss'
import ClassTable from '../../../storybook/ClassTable'

const CSSModuleClasses = () => {
  const rows = Object.keys(styles).map((classKey) => {
    return {
      name: styles[classKey]
    }
  })

  return <ClassTable rows={rows} title='Checkbox Classes' />
}

export default CSSModuleClasses
