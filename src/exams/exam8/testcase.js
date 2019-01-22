export default [
  `assert.deepEqual(times(2, String), [ '0', '1' ], 'Basic test failed')`,

  `assert.deepEqual(times(3, Boolean), [ false, true, true ], 'Boolean Value test failed')`,

  `assert.deepEqual(times(5, function() {
  return 'Hi';
}), [ 'Hi', 'Hi', 'Hi', 'Hi', 'Hi' ], 'Failed to use index test')`,

  `assert.deepEqual(times(3, function(i) {
  return 'Hi-' + i;
}), [ 'Hi-0', 'Hi-1', 'Hi-2' ], 'Failed to use index test')`
]
