// TESTING TIME
var Set = require("../structures/set.js");

var setA = new Set();
var setB = new Set();
setA.Add("a");
setB.Add("b");
setB.Add("c");
setB.Add("a");
setB.Add("d");

console.log(setA.Values());
console.log(setB.Values());
// shouldn't return the duplicate 'b'
console.log(setA.Subset(setB));
console.log(setA.Intersection(setB).Values());
console.log(setB.Difference(setA).Values());

var setC = new Set();
var setD = new Set();

setC.Add("a");
setD.Add("b");
setD.Add("c");
setD.Add("a");
setD.Add("d");

console.log(setD.Values());
setD.Remove("a");
console.log(setD.Values());
// return --> ['b', 'c', 'd']
console.log(setD.Has("a"));
// return --> false (removed a right before)
console.log(setD.Add("d"));
// return --> false (we already have a 'd')