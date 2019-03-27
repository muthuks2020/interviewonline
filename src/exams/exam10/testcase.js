export default [
  `const src = ['nan', 'ABC', 'DEF']
const target = ['aa', 'GHIJ', 'hao']

assert.deepEqual(difference(src, target), ['nan', 'ABCD'], 'Basic Test Failed')`,

  `const src = [1, NaN, 3]
const target = [NaN, 5, NaN]

assert.deepEqual(difference(src, target), [1, 3], 'NaN Match test failed')`,

  `const src = [1, NaN, 3];
const target = [5, 'k'];

assert.equal(difference(src, target).toString(), '1,NaN,3', 'NaN Match test failed')`
]
