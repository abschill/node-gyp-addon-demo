var addon = require('bindings')('add.node')

console.log('This should be eight:', addon.add(3, 5))