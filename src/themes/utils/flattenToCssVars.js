function flattenToCssVars(obj, parentKey = '') {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}-${key}` : key;

    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenToCssVars(value, newKey));
    } else {
      result[`--tb-${newKey}`] = value;
    }
  }

  return result;
}

export default flattenToCssVars;
