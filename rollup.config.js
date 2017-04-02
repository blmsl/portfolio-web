import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'compiled/main-prod.js',
  sourceMap: false,
  treeshake: true,
  moduleName: 'main',
  plugins: [
    // rollupNG2(),
    nodeResolve({
      jsnext: true,
      main: true,
      module: true,
    }),
    commonjs({
      include: 'node_modules/rxjs/**',
    }),
  ],
};
