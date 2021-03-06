import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import strip from '@rollup/plugin-strip';
import visualizer from 'rollup-plugin-visualizer';

const config = {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    dir: 'dist',
    sourcemap: true,
  },
  plugins: [
    visualizer(),
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    resolve(),
    postcss({
      plugins: [],
    }),
    strip(),
  ],
};

export default config;
