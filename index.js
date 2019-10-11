const myModule = require('@abadri-test/my-yarn-test');

console.log(myModule.foo);

myModule.exports = {
  baz: 'one'
};