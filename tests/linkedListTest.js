var Stack = require('../structures/stack.js');

var testStack = new Stack;

/* TESTING TIME */
console.log(testStack.GetCount());
// return --> 0

console.log(testStack.Push('Some String'));

console.log(testStack.Push(3005));

console.log(testStack.Push(true));

console.log(testStack.Push(3.14));

console.log(testStack.DisplayAll());
// return --> <everything I Pushed>

console.log(testStack.GetCount());
// return --> 4

console.log(testStack.Peek());
// return --> 3.14

console.log(testStack.Pop());
// return --> 3.14

console.log(testStack.Pop());
// return --> true

console.log(testStack.DisplayAll());
// return --> <everything minus 'true' and '3.14'