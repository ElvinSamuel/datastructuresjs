var LinkedList = require('../structures/linkedList.js');

var testLinkedList = new LinkedList;

// Let's implement the linked list.
var testLinkedList = new LinkedList();

// Populate the list with data
testLinkedList.add('Kitten');
testLinkedList.add('Puppy');
testLinkedList.add('Dog');
testLinkedList.add('Cat');
testLinkedList.add('Fish');

console.log(testLinkedList.size());
// return --> 5

console.log(testLinkedList.removeAt(3));
// return --> Cat

console.log(testLinkedList.elementAt(3));
// return --> Fish

console.log(testLinkedList.indexOf('Puppy'));
// return --> 1

console.log(testLinkedList.size());
// return --> 4