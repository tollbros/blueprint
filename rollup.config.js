import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import packageJson from './package.json' assert { type: 'json' };
import sass from 'rollup-plugin-sass';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

export default {
  preserveModules: true,
  input: 'src/index.js', // Change this to your entry point
  output: {
    file: 'dist/index.js',
    format: 'es', // 'modern' can be interpreted as ES module
    name: packageJson.name,
  },
  external: ['react', 'react-dom'],
  plugins: [
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
