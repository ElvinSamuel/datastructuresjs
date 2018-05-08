// TESTING TIME
var Queue = require("../structures/queue.js")

var queueTest = new Queue();
console.log(queueTest.GetCount());
//return --> 0

console.log(queueTest.Enqueue('Some string'));
console.log(queueTest.Enqueue(3005));
console.log(queueTest.Enqueue(true));
console.log(queueTest.Enqueue({ 
    color: 'red',
    wheels: 4,
    engine: {cylinders: 4, size: 2.2}
}));

console.log(queueTest.GetCount());
// return --> 4

console.log(queueTest.DisplayAll());

console.log(queueTest.Dequeue());
// (removes 'Some string')

console.log(queueTest.Dequeue());
// (removes 3005)

console.log(queueTest.GetCount());
// return --> 2

console.log(queueTest.DisplayAll());

console.log(queueTest.PeakAt(0));
// return --> object{content}