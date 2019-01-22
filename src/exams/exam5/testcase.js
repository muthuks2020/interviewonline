export default [
  `assert.equal(value(2), 2, 'Simple numeric verification failed')`,
  `const fn = function() {
  return 3
}
assert.equal(value(fn), 3, 'Simple method validation failed')`,
  `const fn = function() {
  return function() {
      return 'Hello';
  };
};
assert.equal(value(fn), 'Hello', 'Nested method validation failed')`,
  `const fn = function() {
  return function() {
    return function() {
      return function() {
        return function() {
          return [1, 2];
        };
      };
    };
  };
};
assert.deepEqual(value(fn), [1, 2], 'Multi-level nested validation failed')`
]
