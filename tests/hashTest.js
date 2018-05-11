/* Testing Time */
var HashReq = require("../structures/hash.js");

console.log(HashReq.Hash('quincy', 10));

let ht = new HashReq.HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
console.log(ht.lookup('tux'));
ht.print();