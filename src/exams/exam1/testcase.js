export default [
  `assert(isString('hello'), 'Type Check Failed')`,
  `assert.equal(isString(12445), false, 'numeric type validation failed')`,
  `assert.equal(isString(undefined), false, 'variable validation failed')`,
  `assert.equal(isString(null), false, 'Null value verification failed')`,
  `assert(isString(new String('hello')), 'String object validation failed')`,
  `assert.equal(isString({ name: 'aaa' }), false, 'Literal type verification failed')`
]
