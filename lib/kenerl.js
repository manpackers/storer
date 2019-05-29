const rollup = require('rollup')
const merge = require('deepmerge')

console.log(merge({ a: 1 }, { b: 2 }, { c: 3 }))

module.exports = async(input = {}, output = {}) => {
  let builder = await rollup.rollup(input)

  builder.write(output)
}

module.exports({
  input: './test/index.js'
}, {
  dir: './dist',
  format: 'umd',
  name: 'Test'
})
