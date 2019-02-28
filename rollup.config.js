import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
// import json from 'rollup-plugin-json';

export default {
  input: './index.js',
  output: {
    name:'demo.js',
    file: './dist/demo.umd.js',
    format: 'umd'
  },
  watch: {
    exclude:'node_modules/**'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // 仅仅转译我们的源码
    })
  ],
}