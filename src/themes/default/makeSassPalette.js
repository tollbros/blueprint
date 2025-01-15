import { promises as fs } from 'fs'
import { defaultTheme } from './theme'
import process from 'process'

const flattenToSassVars = (obj, parentKey = '') => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}-${key}` : key;

    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenToSassVars(value, newKey));
    } else {
      result[`$tb-${newKey}`] = value;
    }
  }
  return result
}

const makeSassPalette = async () => {
  const palette = defaultTheme.palette
  // At this point result is pretty much this
  // {
  //    '$tb-primary': '#1976d2',
  //    '$tb-secondary': '#dc004e'
  // }
  const sassVarsObj = flattenToSassVars({ palette });
  // Need to transform it to SCSS format
  const sassVars = Object.entries(sassVarsObj).map(([key, value]) => `${key}: ${value};`).join('\n')

  const currentWorkingDirectory = process.cwd()

  await fs.writeFile(`${currentWorkingDirectory}/styles/modules/_colors.scss`, sassVars);
}

makeSassPalette()
