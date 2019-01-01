'use strict';

var LinkedList = function() {
   this._head = null;
	this._tail = null;
	this._size = 0;
}

let Node = function(payload) {
   this._payload = payload;
	this._next = null;
	this._prev = null;
}

//////////////////////
// Helper Functions
/////////////////////

let validateDefined = function(val) {
	if (val === undefined) {
		throw new TypeError("Argument is undefined");
	}
}

let validateRange = function(idx, list) {
	if (typeof idx !== "number") {
		throw new TypeError("Index must be a number");
	}
	if (idx < 0) {
		throw new RangeError("Index cannot be less than zero");
	}
	if (idx >= list._size) {
		throw new RangeError("Index is out of range")
	}
}

let _insertOnly = function(data, list) {
	let node = new Node(data);
	list._head = node;
	list._tail = node;
	list._size = 1;
}

let _insertFirst = function(data, list) {
	let node = new Node(data);
	list._head._prev = node;
	node._next = list._head;
	list._head = node;
	list._size++;
}

let _insertLast = function(data, list) {
	let node = new Node(data);
	list._tail._next = node;
	node._prev = list._tail;
	list._tail = node;
	list._size++;
}

let _removeOnly = function(list) {
	let item = list._head._payload;
	list._head = null;
	list._tail = null;
	list._size = 0;
	return item;
}

let _removeFirst = function(list) {
	let item = list._head._payload;
	list._head = list._head._next;
	list._head._prev = null;
	list._size--;
	return item;
}

let _removeLast = function(list) {
	let item = list._tail._payload;
	list._tail = list._tail._prev;
	list._tail._next = null;
	list._size--;
	return item;
}

let _getNodeAt = function(idx, list) {
	let node = list._head;
	for (let i = 0; i < idx; i++) {
		node = node._next;
	}
	return node;
}

let _removeAt = function(idx, list) {
	if (idx >= 0 && idx < list._size) {
		if (idx === 0 && list._size === 1) {
			return _removeOnly(list);
		}
		if (idx === 0) {
			return _removeFirst(list);
		}
		if (idx === (list._size - 1)) {
			return _removeLast(list);
		}
		let node = _getNodeAt(idx, list);
		node._next._prev = node._prev;
		node._prev._next = node._next;
		list._size--;
		return node._payload;
	}
	return undefined;
}

let _findFirst = function(data, list) {
	let index = 0;
	let node = list._head;
	while (node !== null) {
		if (node._payload === data) {
			return index;
		}
		node = node._next;
		index++;
	}
	return -1;
}

let _findLast = function(data, list) {
	let index = (list.size() - 1);
	let node = list._tail;
	while (node !== null) {
		if (node._payload === data) {
			return index;
		}
		node = node._prev;
		index--;
	}
	return -1;
}

////////////////////////////
// Linked List Methods
////////////////////////////

/**
 * Adds node to end of list, returning true.
 */
LinkedList.prototype.add = function(data) {
	validateDefined(data);
	return this.addLast(data);
}

/**
 * Adds node to start of list, returning true.
 */
LinkedList.prototype.addFirst = function(data) {
	validateDefined(data);
	if (this._size === 0) {
		_insertOnly(data, this);
	}
	else {
		_insertFirst(data, this);
	}
	return true;
}

/**
 * Adds node to end of list, returning true.
 */
LinkedList.prototype.addLast = function(data) {
	validateDefined(data);
	if (this._size === 0) {
		_insertOnly(data, this);
	}
	else {
		_insertLast(data, this);
	}
	return true;
}

/**
 * Adds multiple nodes to end of list, returning number of items added. 
 * The argument must be an array or LinkedList or an error will be thrown.
 */
LinkedList.prototype.addAll = function(arrayOfData) {
	validateDefined(arrayOfData);
	if (Array.isArray(arrayOfData)) {
		arrayOfData.forEach(function(item) {
			this.addLast(item);
		}.bind(this));
		return arrayOfData.length;
	}
	else if (arrayOfData instanceof LinkedList) {
		arrayOfData.forEach(function(item) {
			this.addLast(item);
		}.bind(this));
		return arrayOfData.size();
	}
	else {
		throw new TypeError("addAll only takes an array or another LinkedList");
	}
}

/**
 * Adds multiple nodes to beginning of list, returning number of items added.
 * The argument must be an array.
 */
LinkedList.prototype.addAllFirst = function(arrayOfData) {
	validateDefined(arrayOfData);
	if (Array.isArray(arrayOfData)) {
		for ( let i = (arrayOfData.length - 1); i >= 0; i--) {
			this.addFirst(arrayOfData[i]);
		}
	}
	else if (arrayOfData instanceof LinkedList) {
		arrayOfData.forEachReverse(function(item) {
			this.addFirst(item);
		}.bind(this));
	}
	else {
		throw new TypeError("addAll only takes an array or another LinkedList");
	}
}

/**
 * Removes all elements from the list, returning void.
 */
LinkedList.prototype.clear = function() {
	this._head = null;
	this._tail = null;
	this._size = 0;
}

/**
 * Returns a shallow copy of this linked list.
 */
LinkedList.prototype.clone = function() {
	let newList = new LinkedList();
	newList.addAll(this);
	return newList;
}

/**
 * Returns true if this list contains the specified element.
 */
LinkedList.prototype.contains = function(data) {
	validateDefined(data);
	let index = _findFirst(data, this);
	return index !== -1;
}

/**
 * Gets the element at the specified index without removing it. Returns
 * the element or throws an error if the index is out of range.
 */
LinkedList.prototype.get = function(idx) {
	validateRange(idx, this);
	let node = _getNodeAt(idx, this);
	return node._payload;
}

/**
 * Gets the first item in the list without removing it. Returns the element
 * or throws an error if list is empty.
 */
LinkedList.prototype.getFirst = function() {
	if (this._size > 0) {
		return this._head._payload;
	}
	throw new RangeError("Cannot get first of an empty list");
}

/**
 * Gets the last item in the list without removing it. Returns the element
 * or throws an error if the index is out of range.
 */
LinkedList.prototype.getLast = function() {
	if (this._size > 0) {
		return this._tail._payload;
	}
	throw new RangeError("Cannot get last of an empty list");
}

/**
 * Returns the index of the first occurence the specified element or -1 if it isn't found.
 */
LinkedList.prototype.indexOf = function(data) {
	validateDefined(data);
	return _findFirst(data, this);
}

/**
 * Returns the index of the last occurence of the specified element or -1 if it isn't found.
 */
LinkedList.prototype.lastIndexOf = function(data) {
	validateDefined(data);
	return _findLast(data, this);
}

/**
 * Returns true if the list is empty
 */
LinkedList.prototype.isEmpty = function() {
	return this._size === 0;
}

/**
 * Returns true if the list is not empty
 */
LinkedList.prototype.isNotEmpty = function() {
	return this._size > 0;
}

/**
 * Returns the first item in the list without removing it. Returns undefined if the list
 * is empty. Same as peekFirst.
 */
LinkedList.prototype.peek = function() {
	return this.peekFirst();
}

/**
 * Retuns the first item in the list without removing it. Returns undefined if the list
 * is empty.
 */
LinkedList.prototype.peekFirst = function() {
	return (this._size > 0) ? this._head._payload : undefined;
}

/**
 * Retuns the last item in the list without removing it. Returns undefined if the list
 * is empty.
 */
LinkedList.prototype.peekLast = function() {
	return (this._size > 0) ? this._tail._payload : undefined;
}

/**
 * Retuns the item in the list at the specified index without removing it. Returns undefined if there
 * is no item at that index.
 */
LinkedList.prototype.peekAt = function(idx) {
	if (idx >= 0 && idx < this._size) {
		let node = _getNodeAt(idx, this);
		return node._payload;
	}
	return undefined;
}

/**
 * Retrieves and removes the first item in the list. Returns undefined if there are no items in the list.
 * Same as pollFirst.
 */
LinkedList.prototype.poll = function() {
	return this.pollFirst();
}

/**
 * Retrieves and removes the first item in the list. Returns undefined if there are no items in the list.
 * Same as poll.
 */
LinkedList.prototype.pollFirst = function() {
	if (this._size === 1) {
		return _removeOnly(this);
	}
	if (this._size > 1) {
		return _removeFirst(this);
	}
	return undefined;
}

/**
 * Retrieves and removes the last item in the list. Returns undefined if there are no items in the list.
 */
LinkedList.prototype.pollLast = function() {
	if (this._size === 1) {
		return _removeOnly(this);
	}
	if (this._size > 1) {
		return _removeLast(this);
	}
	return undefined;
}

/**
 * Retrieves and removes the first item in the list. Throws an error if there are no items in the list.
 * Same as removeFirst.
 */
LinkedList.prototype.pop = function() {
	return this.removeFirst();
}

/**
 * Inserts an item at the front of the list, returning void.
 */
LinkedList.prototype.push = function(data) {
	validateDefined(data);
	this.addFirst(data);
}

/**
 * Retrieves and removes the first item in the list. Throws an error if the there are no items in the list.
 */
LinkedList.prototype.remove = function() {
	return this.removeFirst();
}

/**
 * Retrieves and removes the item at the specified index. Throws an error if the index is out of range.
 */
LinkedList.prototype.removeAt = function(idx) {
	validateRange(idx, this);
	return _removeAt(idx, this);
}

/**
 * Removes first occurence of the specified item. Returns true if the list contained the item.
 * Same as removeFirstOccurrence.
 */
LinkedList.prototype.removeValue = function(data) {
	validateDefined(data);
	let idx = _findFirst(data, this);
	if (idx >= 0) {
		_removeAt(idx, this);
		return true;
	}
	return false;
}

/**
 * Retrieves and removes the first item in the list. Throws an error if the there are no items in the list.
 * Same as remove.
 */
LinkedList.prototype.removeFirst = function() {
	if (this._size === 1) {
		return _removeOnly(this);
	}
	if (this._size > 1) {
		return _removeFirst(this);
	}
	throw new RangeError("Cannot perform this operation on an empty list")
}

/**
 * Retrieves and removes the last item in the list. Throws an error if the there are no items in the list.
 */
LinkedList.prototype.removeLast = function() {
	if (this._size === 1) {
		return _removeOnly(this);
	}
	if (this._size > 1) {
		return _removeLast(this);
	}
	throw new RangeError("Cannot perform this operation on an empty list")
}

/**
 * Removes first occurence of the specified item. Returns true if the list contained the item.
 * Same as removeValue.
 */
LinkedList.prototype.removeFirstOccurrence = function(data) {
	validateDefined(data);
	let idx = _findFirst(data, this);
	if (idx >= 0) {
		_removeAt(idx, this);
		return true;
	}
	return false;
}

/**
 * Removes last occurence of the specified item. Returns true if the list contained the item.
 */
LinkedList.prototype.removeLastOccurrence = function(data) {
	validateDefined(data);
	let idx = _findLast(data, this);
	if (idx >= 0) {
		_removeAt(idx, this);
		return true;
	}
	return false;
}

/**
 * Returns the number of items in the list.
 */
LinkedList.prototype.size = function() {
	return this._size;
}

/**
 * Returns the list as an array. It will return an empty array if the list is empty.
 */
LinkedList.prototype.toArray = function() {
	let arr = [];
	let node = this._head;
	while (node !== null) {
		arr.push(node._payload);
		node = node._next;
	}
	return arr;
}

/**
 * Retuns the list as an array in reverse order. It will return an empty array if the list is empty.
 */
LinkedList.prototype.toArrayReverse = function() {
	let arr = [];
	let node = this._tail;
	while (node !== null) {
		arr.push(node._payload);
		node = node._prev;
	}
	return arr;
}

/**
 * Applies the given function to each item in the list. Does nothing if the list is empty.
 */
LinkedList.prototype.forEach = function(func) {
	let node = this._head;
	while (node !== null) {
		func(node._payload);
		node = node._next;
	}
}

/**
 * Applies the given function to each item in the list in reverse order. Does nothing if the list is empty.
 */
LinkedList.prototype.forEachReverse = function(func) {
	let node = this._tail;
	while (node !== null) {
		func(node._payload);
		node = node._prev;
	}
}

/**
 * Adds node in front of node specified by the index. If the
 * list is empty and the index is zero, it will add the node.
 */
LinkedList.prototype.insertBefore = function(idx, data) {
	validateDefined(data);
	if (idx === 0 && this._size === 0) {
		_insertOnly(data, this);
	}
	else if (idx === 0 && this._size > 0) {
		_insertFirst(data, this);
	}
	else if (idx > 0 && idx < this._size) {
		let currentNode = _getNodeAt(idx, this);
		let node = new Node(data);
		node._prev = currentNode._prev;
		node._next = currentNode;
		currentNode._prev = node;
		node._prev._next = node;
		this._size++;
	}
	else {
		throw new RangeError("Index out of range");
	}
}

/**
 * Adds node after the node specified by the index. If the list
 * is empty and the index is zero, it will add the node.
 */
LinkedList.prototype.insertAfter = function(idx, data) {
	validateDefined(data);
	if (idx === 0 && this._size === 0) {
		_insertOnly(data, this);
	}
	else if (idx === (this._size - 1) && this._size > 0) {
		_insertLast(data, this);
	}
	else if (idx > 0 && idx < this._size) {
		let currentNode = _getNodeAt(idx, this);
		let node = new Node(data);
		node._prev = currentNode;
		node._next = currentNode._next;
		currentNode._next = node;
		node._next._prev = node;
		this._size++;
	}
	else {
		throw new RangeError("Index out of range")
	}
}

module.exports = LinkedList;
