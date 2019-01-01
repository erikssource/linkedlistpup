[![Build Status](https://travis-ci.org/erikssource/linkedlistpup.svg?branch=master)](https://travis-ci.org/erikssource/linkedlistpup) [![Coverage Status](https://coveralls.io/repos/github/erikssource/linkedlistpup/badge.svg?branch=master)](https://coveralls.io/github/erikssource/linkedlistpup?branch=master) [![](https://img.shields.io/bundlephobia/min/react.svg)](https://github.com/erikssource/linkedlistpup)

# linkedlistpup
Doubly linked list implementation with an extensive Java-like API. If you are used to the Java LinkedList collection, you should feel at home with linkedlistpup. Linked lists are best used as queues or stacks since random access is very inefficient.

## Installation
Install with npm as expected.
```javascript
npm install linkedlistpup --save
```
## Usage
You will need to import linkedlistpup. 
```javascript
import LinkedList from 'linkedlistpup';
```
Or you will need to require it.
```javascript
var LinkedList = require('linkedlistpup');
```
Then use linkedlistpup like any other class.
```javascript
import LinkedList from 'linkedlistpup';

let list = new LinkedList();
list.add("Alpha");
list.add("Beta");
list.add("Charlie");

let firstValue = list.poll();
```

## API
The API for linkedlistpup will feel familiar to Java users, but there are a few differences and additions to better fit into a Javascript paradigm. The list will hold any value aside from undefined.

### LinkedList()
Creates an empty list.

#### add(item):boolean throws TypeError
Adds item to the end of the list. It will return true to indicate the item has been added. If the passed in value is undefined, then it will throw a TypeError.

#### addFirst(item):boolean throws TypeError
Adds item to the front of the list. It will return true to indicate the item has been added. If the passed in value is undefined, then it will throw a TypeError.

#### addLast(item):boolean throws TypeError
Adds item to the end of the list. It will return true to indicate the item has been added. If the passed in value is undefined, then it will throw a TypeError. This behavior is identical to add.

#### addAll(items):number throws TypeError
Adds all elements from items to the end of the list, returning the number of items added. The argument must be an array or another instance of linkedlistpup or it will throw a TypeError. Adding 4,5,6 to a list that already has 1,2,3 will result in 1, 2, 3, 4, 5, 6.

#### addAllFirst(items):number throws TypeError
Adds all elements from items to the front of the list, returning the number of items added. The argument must be an array or another instance of linkedlistpup or it will throw a TypeError. Adding 4,5,6 to a list that already has 1,2,3 will result in 4, 5, 6, 1, 2, 3.

#### size():number
Returns the number of items in the list.

#### clear()
Removes all items from the list, leaving it empty.

#### clone():likedlistpup
Performs a shallow copy of the list resulting in a new instance of linkedlistpup with the same contents as the original.

#### contains(item):boolean
Returns true if the list contains the specified item. If the item isn't in the list, then it will return false.

#### get(index):item throws RangeError
Returns the item, whatever type that might be, at the specified index. If the index isn't valid for the list, then a RangeError will be thrown.

#### getFirst():item throws RangeError
Returns the first item in the list. If the list is empty, then a RangeError will be thrown.

#### getLast():item throws RangeError
Returns the last item in the list. If the list is empty, then a RangeError will be thrown.

#### indexOf(item):number
Returns the index of the first occurence of the specified item in the list. If the item isn't in the list, then it will return -1.

#### lastIndexOf(item):number
Returns the index of the last occurence of the specified item in the list. If the item isn't in the list, then it will return -1.

#### isEmpty():boolean
Returns true if the list has no items and false if the list has one or more items.

#### isNotEmpty():boolean
Returns true if the list has one or more items and false if the list is empty.

#### peek():item
Returns the first item in the list while leaving the list unchanged. If the list is empty, then the returned value will be undefined.

#### peekFirst():item
Returns the first item in the list while leaving the list unchanged. If the list is empty, then the returned value will be undefined.

#### peekLast():item
Returns the last item in the list while leaving the list unchanged. If the list is empty, then the returned value will be undefined.

#### peekAt(index):item
Returns the item at the specified index in the list while leaving the list unchanged. If the index is invalid, then the returned value will be undefined.

#### poll():item
Removes and returns the first item in the list. If the list is empty, then it will return undefined.

#### pollFirst():item
Removes and returns the first item in the list. If the list is empty, then it will return undefined. Same as poll.

#### pollLast():item
Removes and returns the list item in the list. If the list is empty, then it will return undefined.

#### pop():item throws RangeError
Removes and returns the first item in the list. If the list is empty, then it will throw a RangeError.

#### remove():item throws RangeError
Removes and returns the first item in the list. If the list is empty, then it will throw a RangeError. Same as pop.

#### removeFirst():item throws RangeError
Removes and returns the first item in the list. If the list is empty, then it will throw a RangeError. Same as pop.

#### removeLast():item throws RangeError
Removes and returns the last item in the list. If the list is empty, then it will throw a RangeError.

#### removeAt(index):item throws RangeError
Removes and returns the item at the specified index. If the index is invalid, then it will throw a RangeError.

#### removeValue(item):boolean
Removes the first occurrence of the specified item in the list. If an item was removed, it will return true. If the item wasn't found, then it will return false.

#### removeFirstOccurrence(value):boolean
Removes the first occurrence of the specified item in the list. If an item was removed, it will return true. If the item wasn't found, then it will return false. Same as removeValue.

#### removeLastOccurrence(value):boolean
Removes the last occurrence of the specified item in the list. If an item was removed, it will return true. If the item wasn't found, then it will return false.

#### toArray():array
Returns the list as an array. If the list is empty, then an empty array will be returned.

#### toArrayReverse():array
Returns the list as an array in reverse order. If the list is empty, then an empty array will be returned.

#### forEach(function)
Invokes the passed-in function on each item in the list in order.

#### forEachReverse(function)
Invokes the passed-in function on each item in the list in reverse order.

#### insertBefore(index, item) throws RangeError, TypeError
Inserts an item in the list before the item at the specified index. If the list is empty and the index is zero, then it will add the item as the only item in the list. If the item passed in is undefined then a TypeError will be thrown. If the index is out of range (with the exception of an index of 0), then a RangeError will be thrown.

#### insertAfter(index, item) throws RangeError, TypeError
Inserts an item in the list after the item at the specified index. If the list is empty and the index is zero, then it will add the item as the only item in the list. If the item passed in is undefined then a TypeError will be thrown. If the index is out of range (with the exception of an index of 0), then a RangeError will be thrown.
