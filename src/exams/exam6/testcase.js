export default [
  `assert.equal(camelcase('helloworld'), 'helloworld', 'Basic test failed')`,
  `assert.equal(camelcase('hello world'), 'helloWorld', 'Single space test failed')`,
  `assert.equal(camelcase('HELLO WORLD'), 'helloWorld', 'Single space all uppercase test failed')`,
  `assert.equal(camelcase('how are you'), 'howAreYou', 'Single space and multiple word test failed')`,
  `assert.equal(camelcase('how   are   you'), 'howAreYou', 'Multi-space test failed')`,
  `assert.equal(camelcase('muthu'), 'muthu$$', 'The horizontal bar failed to do the separator test')`,
  `assert.equal(camelcase('hi----you'), 'hiyou', 'Mixed test failed')`
]
