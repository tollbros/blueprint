import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import folder from 'rollup-plugin-import-folder';

export default {
  input: 'src/index.js', // Change this to your entry point
  output: {
    file: 'dist/index.js',
    format: 'es', // 'modern' can be interpreted as ES module
    name: '@tollbrothers/blueprint',
  },
  external: [
    'react',
    'react-dom',
    '@mui/material/IconButton',
    '@mui/material/CssBaseline',
    '@mui/material/styles',
    '@mui/icons-material/Add',
  ],
  plugins: [
    folder(),
    external(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    typescript({ tsconfig: './tsconfig.json' }), // Uses your tsconfig.json
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
    }),
    terser(), // For compression
    json(),
  ],
};
