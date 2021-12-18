import { name } from '../package.json'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import stylus from 'rollup-plugin-stylus-compiler'
import css from 'rollup-plugin-css-porter'

const file = type => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    'node_modules',
    'src/App.vue',
    'src/main.ts'
  ]
}

export { name, file }

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue({ css: false, preprocessStyles: true }),
    // stylus(),
    css()
  ],
  external: ['vue', 'lodash-es']
  // external: function (id) {
  //   return /^vue/.test(id)
  // }
}