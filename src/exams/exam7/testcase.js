export default [
  `const read = function(file, fn) {
  fn(null, 'file: ' + file);
}
const thunkRead = tfy(read)

thunkRead('hello.txt')(function(err, res) {
  assert(!err)
  assert('file: hello.txt' === res)
  done()
})`,

  `const read = function(file, fn) {
setTimeout(function() {
  fn(null, 'file: ' + file)
}, 2000)
}

const thunkRead = tfy(read);

thunkRead('world.txt')(function(err, res) {
  assert(!err)
  assert('file: world.txt' === res)
  done()
})`,

  `const load = function(fn) {
    fn(null, this.name)
};

const user = {name: 'nanfeng', load: tfy(load)}

user.load()(function(err, name) {
  if (err) {
    return done(err)
  }
  assert('nanfeng' === name)
  done()
})`,

  `const load = function(fn) {
    throw new Error('wow!!!')
};

const thunkLoad = tfy(load)

thunkLoad()(function(err) {
  assert(err)
  assert('wow!!!' == err.message)
  done()
})`
]
