export default [
  `const add = currying(function(a, b) {
  return a + b;
})
assert.equal(add(1)(2), 3, 'verification failed')
`,
  `const add = currying(function(a, b, c) {
  return a + b + c;
})
assert.equal(add(1, 2)(3), 6, 'Multi-parameter one-time currying verification failed')
`,
  `const add = currying(function(a, b, c) {
  return a + b + c;
})
assert.equal(add(1)(2)(3), 6, 'Multi-parameter multiple-currency verification failed')
`,
  `const add = currying(function(a, b, c) {
  return a + b + c;
})
assert.equal(add(1)(2)(3), 6, 'Multi-parameter multiple-currency verification failed');
assert.equal(add(2)(3)(4), 9, 'Multi-parameter multiple-currency state separation verification failed')`,
  `const add = currying(function(a, b, c, d) {
  return a + b + c + d;
})
const a11 = add(1)
assert.equal(a11(2)(3)(4), 10, 'Multi-parameter multiple-currency verification failed')
assert.equal(a11(2, 3, 4), 10, 'Multi-parameter multiple-currency multiplexing verification failed')`
]
