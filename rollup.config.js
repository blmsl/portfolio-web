import nodeResolve from 'rollup-plugin-node-resolve';

class RollupNG2 {
  resolveId(id) {
    if (id.startsWith('rxjs/')) {
      return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
    }
    return undefined;
  }
}

const rollupNG2 = () => new RollupNG2();

export default {
  entry: 'compiled/tmp/main-prod.js',
  sourceMap: true,
  treeshake: true,
  moduleName: 'main',
  plugins: [
    rollupNG2(),
    nodeResolve({
      jsnext: true, main: true, module: true
    })
  ]
};


