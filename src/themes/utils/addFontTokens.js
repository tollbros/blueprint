const addFontTokens = ({ theme }) => {
  return {
    ...theme,
    typography: {
      ...Object.keys(theme.typography).reduce((acc, key, index) => {
        if (index === 0) {
          acc[key] = theme.typography[key].font;
        }

        return {
          ...acc,
          [key]: {
            ...theme.typography[key],
            font: `${theme.typography[key].fontStyle}
                  ${theme.typography[key].fontWeight}
                  ${theme.typography[key].fontSize}/
                  ${theme.typography[key].lineHeight}
                  ${theme.typography[key].fontFamily}`,
            fontStyle: theme.typography[key].fontStyle,
            fontWeight: theme.typography[key].fontWeight,
            fontSize: theme.typography[key].fontSize,
            lineHeight: theme.typography[key].lineHeight,
            fontFamily: theme.typography[key].fontFamily,
            textDecorationLine: theme.typography[key].textDecorationLine,
            textTransform: theme.typography[key].textTransform,
            margin: theme.typography[key].margin,
          },
        };
      }, {}),
    },
  };
};

export default addFontTokens;
