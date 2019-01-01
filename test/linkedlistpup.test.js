import LinkedList from '..';

let arrayValues = ["x-ray", "yankee", "zulu", 1, 2, 3]

let listValues = new LinkedList();
listValues.addAll(arrayValues);

describe('Invalid Inputs', () => {
   let linkedList = null;

   beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add("Alpha");
      linkedList.add("Beta");
      linkedList.add("Charlie");
      linkedList.add("Delta");
      linkedList.add("Echo");
      linkedList.add("Foxtrot");
      linkedList.add(1);
      linkedList.add([1, 2, 3, 4]); // 8 items
   });

   test('#add() Undefined', () => {
      expect(() => linkedList.add(undefined)).toThrow(TypeError);
   });

   test('#addFirst() Undefined', () => {
      expect(() => linkedList.addFirst(undefined)).toThrow(TypeError);
   });

   test('#addLast() Undefined', () => {
      expect(() => linkedList.addLast(undefined)).toThrow(TypeError);
   });

   test('#addAll() Undefined', () => {
      expect(() => linkedList.addAll(undefined)).toThrow(TypeError);
   });

   test('#addAll() Number', () => {
      expect(() => linkedList.addAll(1)).toThrow(TypeError);
   });

   test('#addAll() String', () => {
      expect(() => linkedList.addAll("string")).toThrow(TypeError);
   });

   test('#addAll() Object', () => {
      expect(() => linkedList.addAll({ foo: 'bar' })).toThrow(TypeError);
   });

   test('#addAllFirst() Undefined', () => {
      expect(() => linkedList.addAllFirst(undefined)).toThrow(TypeError);
   });

   test('#addAllFirst() Number', () => {
      expect(() => linkedList.addAllFirst(1)).toThrow(TypeError);
   });

   test('#addAllFirst() String', () => {
      expect(() => linkedList.addAllFirst("string")).toThrow(TypeError);
   });

   test('#addAllFirst() Object', () => {
      expect(() => linkedList.addAllFirst({ foo: 'bar' })).toThrow(TypeError);
   });

   test('#contains() Undefined', () => {
      expect(() => linkedList.contains(undefined)).toThrow(TypeError);
   });

   test('#get() not a number', () => {
      expect(() => linkedList.get('apple')).toThrow(TypeError);
   });

   test('#get() negative', () => {
      expect(() => linkedList.get(-1)).toThrow(RangeError);
   });

   test('#get() equal to size', () => {
      let index = linkedList.size();
      expect(() => linkedList.get(index)).toThrow(RangeError);
   });

   test('#indexOf() Undefined', () => {
      expect(() => linkedList.indexOf(undefined)).toThrow(TypeError);
   });

   test('#lastIndexOf() Undefined', () => {
      expect(() => linkedList.lastIndexOf(undefined)).toThrow(TypeError);
   });

   test('#push() Undefined', () => {
      expect(() => linkedList.push(undefined)).toThrow(TypeError);
   });

   test('#removeAt() negative', () => {
      expect(() => linkedList.removeAt(-1)).toThrow(RangeError);
   });

   test('#removeAt() equal to size', () => {
      let index = linkedList.size();
      expect(() => linkedList.removeAt(index)).toThrow(RangeError);
   });

   test('#removeValue() Undefined', () => {
      expect(() => linkedList.removeValue(undefined)).toThrow(TypeError);
   });

   test('#removeFirstOccurrence() Undefined', () => {
      expect(() => linkedList.removeFirstOccurrence(undefined)).toThrow(TypeError);
   });

   test('#removeLastOccurrence() Undefined', () => {
      expect(() => linkedList.removeLastOccurrence(undefined)).toThrow(TypeError);
   });

   test('#insertBefore() Undefined', () => {
      expect(() => linkedList.insertBefore(0, undefined)).toThrow(TypeError);
   });

   test('#insertAfter() Undefined', () => {
      expect(() => linkedList.insertAfter(0, undefined)).toThrow(TypeError);
   });

   test('#insertBefore() negative', () => {
      expect(() => linkedList.insertBefore(-1, "Zulu")).toThrow(RangeError);
   });

   test('#insertAfter() negative', () => {
      expect(() => linkedList.insertAfter(-1, "Zulu")).toThrow(RangeError);
   });

   test('#insertBefore() index set to size', () => {
      let index = linkedList.size();
      expect(() => linkedList.insertBefore(index, "Zulu")).toThrow(RangeError);
   });

   test('#insertAfter() index set to size', () => {
      let index = linkedList.size();
      expect(() => linkedList.insertAfter(index, "Zulu")).toThrow(RangeError);
   });
});

describe('Empty Linked List', () => {
   let linkedList = null;

   beforeEach(() => {
      linkedList = new LinkedList();
   });

   test('#add()', () => {
      let val = linkedList.add("Alpha");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Alpha");
      expect(linkedList.size()).toBe(1);
      expect(val).toBe(true);
   });

   test('#addFirst()', () => {
      let val = linkedList.addFirst("Alpha");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Alpha");
      expect(linkedList.size()).toBe(1);
      expect(val).toBe(true);
   });

   test('#addLast()', () => {
      let val = linkedList.addLast("Alpha");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Alpha");
      expect(linkedList.size()).toBe(1);
      expect(val).toBe(true);
   });

   test('#addAll() array', () => {
      let val = linkedList.addAll(arrayValues);
      expect(linkedList.size()).toBe(6);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
   });

   test('#addAll() list', () => {
      let val = linkedList.addAll(listValues);
      expect(linkedList.size()).toBe(6);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
   });

   test('#addAllFirst() array', () => {
      let val = linkedList.addAllFirst(arrayValues);
      expect(linkedList.size()).toBe(6);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
   });

   test('#addAllFirst() list', () => {
      let val = linkedList.addAllFirst(listValues);
      expect(linkedList.size()).toBe(6);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
   });

   test('#clear()', () => {
      linkedList.clear();
      expect(linkedList.size()).toBe(0);
      expect(linkedList.peekFirst()).toBe(undefined);
      expect(linkedList.peekLast()).toBe(undefined);
   });

   test('#clone()', () => {
      let newList = linkedList.clone();
      expect(newList.size()).toBe(0);
      expect(newList.peekFirst()).toBe(undefined);
      expect(newList.peekLast()).toBe(undefined);
   });

   test('#contains()', () => {
      expect(linkedList.contains("Echo")).toBe(false);
   });

   test('#get()', () => {
      expect(() => linkedList.get(0)).toThrow(RangeError);
   });

   test('#getFirst()', () => {
      expect(() => linkedList.getFirst()).toThrow(RangeError);
   });

   test('#getLast()', () => {
      expect(() => linkedList.getLast()).toThrow(RangeError);
   });

   test('#indexOf()', () => {
      expect(linkedList.indexOf("Echo")).toBe(-1);
   });

   test('#lastIndexOf()', () => {
      expect(linkedList.lastIndexOf("Echo")).toBe(-1);
   });

   test('#isEmpty()', () => {
      expect(linkedList.isEmpty()).toBe(true);
   });

   test('#isNotEmpty()', () => {
      expect(linkedList.isNotEmpty()).toBe(false);
   });

   test('#peek()', () => {
      expect(linkedList.peek()).toBe(undefined);
   });

   test('#peekFirst()', () => {
      expect(linkedList.peekFirst()).toBe(undefined);
   });

   test('#peekLast()', () => {
      expect(linkedList.peekLast()).toBe(undefined);
   });

   test('#peekAt()', () => {
      expect(linkedList.peekAt(0)).toBe(undefined);
   });

   test('#poll()', () => {
      expect(linkedList.poll()).toBe(undefined);
   });

   test('#pollFirst()', () => {
      expect(linkedList.pollFirst()).toBe(undefined);
   });

   test('#pollLast()', () => {
      expect(linkedList.pollLast()).toBe(undefined);
   });

   test('#pop()', () => {
      expect(() => linkedList.pop()).toThrow(RangeError);
   });

   test('#push()', () => {
      linkedList.push("Alpha");
      expect(linkedList.size()).toBe(1);
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#remove()', () => {
      expect(() => linkedList.remove()).toThrow(RangeError);
   });

   test('#removeAt()', () => {
      expect(() => linkedList.removeAt(0)).toThrow(RangeError);
   });

   test('#removeValue()', () => {
      expect(linkedList.removeValue("Echo")).toBe(false);
   });

   test('#removeFirst()', () => {
      expect(() => linkedList.removeFirst()).toThrow(RangeError);
   });

   test('#removeLast()', () => {
      expect(() => linkedList.removeLast()).toThrow(RangeError);
   });

   test('#removeFirstOccurrence()', () => {
      expect(linkedList.removeFirstOccurrence("Echo")).toBe(false);
   });

   test('#removeLastOccurrence()', () => {
      expect(linkedList.removeLastOccurrence("Echo")).toBe(false);
   });

   test('#size()', () => {
      expect(linkedList.size()).toBe(0);
   });

   test('#toArray()', () => {
      let arr = linkedList.toArray();
      expect(arr.length).toBe(0);
   });

   test('#toArrayReverse()', () => {
      let arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(0);
   });

   test('#forEach()', () => {
      let val = "";
      linkedList.forEach((item) => {
         val += item;
      });
      expect(val).toBe("");
   });

   test('#forEachReverse()', () => {
      let val = "";
      linkedList.forEachReverse((item) => {
         val += item;
      });
      expect(val).toBe("");
   });

   test('#insertBefore()', () => {
      linkedList.insertBefore(0, "Alpha");
      expect(linkedList.size()).toBe(1);
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#insertAfter()', () => {
      linkedList.insertAfter(0, "Alpha");
      expect(linkedList.size()).toBe(1);
      expect(linkedList.peek()).toBe("Alpha");
   });
});

///////////////////////////
// One Item List
//////////////////////////

describe('One Item Linked List', () => {
   let linkedList = null;

   beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add("Alpha");
   });

   test('#add()', () => {
      let val = linkedList.add("Beta");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Beta");
      expect(linkedList.size()).toBe(2);
      expect(val).toBe(true);
   });

   test('#addFirst()', () => {
      let val = linkedList.addFirst("Beta");
      expect(linkedList.peekFirst()).toBe("Beta");
      expect(linkedList.peekLast()).toBe("Alpha");
      expect(linkedList.size()).toBe(2);
      expect(val).toBe(true);
   });

   test('#addLast()', () => {
      let val = linkedList.addLast("Beta");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Beta");
      expect(linkedList.size()).toBe(2);
      expect(val).toBe(true);
   });

   test('#addAll() array', () => {
      let val = linkedList.addAll(arrayValues);
      expect(linkedList.size()).toBe(7);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("x-ray");
      expect(linkedList.get(2)).toBe("yankee");
      expect(linkedList.get(3)).toBe("zulu");
      expect(linkedList.get(4)).toBe(1);
      expect(linkedList.get(5)).toBe(2);
      expect(linkedList.get(6)).toBe(3);
   });

   test('#addAll() list', () => {
      let val = linkedList.addAll(listValues);
      expect(linkedList.size()).toBe(7);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("x-ray");
      expect(linkedList.get(2)).toBe("yankee");
      expect(linkedList.get(3)).toBe("zulu");
      expect(linkedList.get(4)).toBe(1);
      expect(linkedList.get(5)).toBe(2);
      expect(linkedList.get(6)).toBe(3);
   });

   test('#addAllFirst() array', () => {
      let val = linkedList.addAllFirst(arrayValues);
      expect(linkedList.size()).toBe(7);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
      expect(linkedList.get(6)).toBe("Alpha");
   });

   test('#addAllFirst() list', () => {
      let val = linkedList.addAllFirst(listValues);
      expect(linkedList.size()).toBe(7);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
      expect(linkedList.get(6)).toBe("Alpha");
   });

   test('#clear()', () => {
      linkedList.clear();
      expect(linkedList.size()).toBe(0);
      expect(linkedList.peekFirst()).toBe(undefined);
      expect(linkedList.peekLast()).toBe(undefined);
   });

   test('#clone()', () => {
      let newList = linkedList.clone();
      expect(newList.size()).toBe(1);
      expect(newList.peekFirst()).toBe("Alpha");
      expect(newList.peekLast()).toBe("Alpha");
   });

   test('#contains()', () => {
      expect(linkedList.contains("Alpha")).toBe(true);
      expect(linkedList.contains("Echo")).toBe(false);
   });

   test('#get()', () => {
      expect(linkedList.get(0)).toBe("Alpha");
   });

   test('#getFirst()', () => {
      expect(linkedList.getFirst()).toBe("Alpha");
   });

   test('#getLast()', () => {
      expect(linkedList.getLast()).toBe("Alpha");
   });

   test('#indexOf()', () => {
      expect(linkedList.indexOf("Alpha")).toBe(0);
      expect(linkedList.indexOf("Echo")).toBe(-1);
   });

   test('#lastIndexOf()', () => {
      expect(linkedList.lastIndexOf("Alpha")).toBe(0);
      expect(linkedList.lastIndexOf("Echo")).toBe(-1);
   });

   test('#isEmpty()', () => {
      expect(linkedList.isEmpty()).toBe(false);
   });

   test('#isNotEmpty()', () => {
      expect(linkedList.isNotEmpty()).toBe(true);
   });

   test('#peek()', () => {
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#peekFirst()', () => {
      expect(linkedList.peekFirst()).toBe("Alpha");
   });

   test('#peekLast()', () => {
      expect(linkedList.peekLast()).toBe("Alpha");
   });

   test('#peekAt()', () => {
      expect(linkedList.peekAt(0)).toBe("Alpha");
      expect(linkedList.peekAt(1)).toBe(undefined);
   });

   test('#poll()', () => {
      let item = linkedList.poll();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(0);
   });

   test('#pollFirst()', () => {
      let item = linkedList.pollFirst();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(0);
   });

   test('#pollLast()', () => {
      let item = linkedList.pollLast();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(0);
   });

   test('#pop()', () => {
      let item = linkedList.pop();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(0);
   });

   test('#push()', () => {
      linkedList.push("Beta");
      expect(linkedList.size()).toBe(2);
      expect(linkedList.get(0)).toBe("Beta");
      expect(linkedList.get(1)).toBe("Alpha");
   });

   test('#remove()', () => {
      let item = linkedList.remove();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(0);
   });

   test('#removeAt()', () => {
      let item = linkedList.removeAt(0);
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(0);
   });

   test('#removeValue()', () => {
      expect(linkedList.removeValue("Alpha")).toBe(true);
      expect(linkedList.size()).toBe(0);
   });

   test('#removeFirst()', () => {
      let item = linkedList.removeFirst();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(0);;
   });

   test('#removeLast()', () => {
      let item = linkedList.removeLast();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(0);
   });

   test('#removeFirstOccurrence()', () => {
      expect(linkedList.removeFirstOccurrence("Alpha")).toBe(true);
      expect(linkedList.size()).toBe(0);
   });

   test('#removeLastOccurrence()', () => {
      expect(linkedList.removeLastOccurrence("Alpha")).toBe(true);
      expect(linkedList.size()).toBe(0);
   });

   test('#size()', () => {
      expect(linkedList.size()).toBe(1);
   });

   test('#toArray()', () => {
      let arr = linkedList.toArray();
      expect(arr.length).toBe(1);
      expect(arr[0]).toBe("Alpha");
   });

   test('#toArrayReverse()', () => {
      let arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(1);
      expect(arr[0]).toBe("Alpha");
   });

   test('#forEach()', () => {
      let val = "";
      linkedList.forEach((item) => {
         val += item;
      });
      expect(val).toBe("Alpha");
   });

   test('#forEachReverse()', () => {
      let val = "";
      linkedList.forEachReverse((item) => {
         val += item;
      });
      expect(val).toBe("Alpha");
   });

   test('#insertBefore()', () => {
      linkedList.insertBefore(0, "Beta");
      expect(linkedList.size()).toBe(2);
      expect(linkedList.get(0)).toBe("Beta");
      expect(linkedList.get(1)).toBe("Alpha");
   });

   test('#insertAfter()', () => {
      linkedList.insertAfter(0, "Beta");
      expect(linkedList.size()).toBe(2);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Beta");
   });
});


///////////////////////////
// Two Item List
//////////////////////////

describe('Two Item Linked List', () => {
   let linkedList = null;

   beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add("Alpha");
      linkedList.add("Beta");
   });

   test('#add()', () => {
      let val = linkedList.add("Charlie");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Charlie");
      expect(linkedList.size()).toBe(3);
      expect(val).toBe(true);
   });

   test('#addFirst()', () => {
      let val = linkedList.addFirst("Charlie");
      expect(linkedList.peekFirst()).toBe("Charlie");
      expect(linkedList.peekLast()).toBe("Beta");
      expect(linkedList.size()).toBe(3);
      expect(val).toBe(true);
   });

   test('#addLast()', () => {
      let val = linkedList.addLast("Charlie");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Charlie");
      expect(linkedList.size()).toBe(3);
      expect(val).toBe(true);
   });

   test('#addAll() array', () => {
      let val = linkedList.addAll(arrayValues);
      expect(linkedList.size()).toBe(8);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Beta");
      expect(linkedList.get(2)).toBe("x-ray");
      expect(linkedList.get(3)).toBe("yankee");
      expect(linkedList.get(4)).toBe("zulu");
      expect(linkedList.get(5)).toBe(1);
      expect(linkedList.get(6)).toBe(2);
      expect(linkedList.get(7)).toBe(3);
   });

   test('#addAll() list', () => {
      let val = linkedList.addAll(listValues);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Beta");
      expect(linkedList.get(2)).toBe("x-ray");
      expect(linkedList.get(3)).toBe("yankee");
      expect(linkedList.get(4)).toBe("zulu");
      expect(linkedList.get(5)).toBe(1);
      expect(linkedList.get(6)).toBe(2);
      expect(linkedList.get(7)).toBe(3);
   });

   test('#addAllFirst() array', () => {
      let val = linkedList.addAllFirst(arrayValues);
      expect(linkedList.size()).toBe(8);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
      expect(linkedList.get(6)).toBe("Alpha");
      expect(linkedList.get(7)).toBe("Beta");
   });

   test('#addAllFirst() list', () => {
      let val = linkedList.addAllFirst(listValues);
      expect(linkedList.size()).toBe(8);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
      expect(linkedList.get(6)).toBe("Alpha");
      expect(linkedList.get(7)).toBe("Beta");
   });

   test('#clear()', () => {
      linkedList.clear();
      expect(linkedList.size()).toBe(0);
      expect(linkedList.peekFirst()).toBe(undefined);
      expect(linkedList.peekLast()).toBe(undefined);
   });

   test('#clone()', () => {
      let newList = linkedList.clone();
      expect(newList.size()).toBe(2);
      expect(newList.peekFirst()).toBe("Alpha");
      expect(newList.peekLast()).toBe("Beta");
   });

   test('#contains()', () => {
      expect(linkedList.contains("Alpha")).toBe(true);
      expect(linkedList.contains("Beta")).toBe(true);
   });

   test('#get()', () => {
      expect(linkedList.get(1)).toBe("Beta");
   });

   test('#getFirst()', () => {
      expect(linkedList.getFirst()).toBe("Alpha");
   });

   test('#getLast()', () => {
      expect(linkedList.getLast()).toBe("Beta");
   });

   test('#indexOf()', () => {
      expect(linkedList.indexOf("Beta")).toBe(1);
   });

   test('#lastIndexOf()', () => {
      expect(linkedList.lastIndexOf("Beta")).toBe(1);
   });

   test('#peek()', () => {
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#peekFirst()', () => {
      expect(linkedList.peekFirst()).toBe("Alpha");
   });

   test('#peekLast()', () => {
      expect(linkedList.peekLast()).toBe("Beta");
   });

   test('#peekAt()', () => {
      expect(linkedList.peekAt(1)).toBe("Beta");
      expect(linkedList.peekAt(2)).toBe(undefined);
   });

   test('#poll()', () => {
      let item = linkedList.poll();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(1);
   });

   test('#pollFirst()', () => {
      let item = linkedList.pollFirst();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(1);
      expect(linkedList.peek()).toBe("Beta");
   });

   test('#pollLast()', () => {
      let item = linkedList.pollLast();
      expect(item).toBe("Beta");
      expect(linkedList.size()).toBe(1);
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#pop()', () => {
      let item = linkedList.pop();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(1);
      expect(linkedList.peek()).toBe("Beta");
   });

   test('#push()', () => {
      linkedList.push("Charlie");
      expect(linkedList.size()).toBe(3);
      expect(linkedList.get(0)).toBe("Charlie");
      expect(linkedList.get(1)).toBe("Alpha");
   });

   test('#remove()', () => {
      let item = linkedList.remove();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(1);
      expect(linkedList.get(0)).toBe("Beta");
   });

   test('#removeAt()', () => {
      let item = linkedList.removeAt(1);
      expect(item).toBe("Beta");
      expect(linkedList.size()).toBe(1);
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#removeValue()', () => {
      expect(linkedList.removeValue("Beta")).toBe(true);
      expect(linkedList.size()).toBe(1);
   });

   test('#removeFirst()', () => {
      let item = linkedList.removeFirst();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(1);;
   });

   test('#removeLast()', () => {
      let item = linkedList.removeLast();
      expect(item).toBe("Beta");
      expect(linkedList.size()).toBe(1);
   });

   test('#removeFirstOccurrence()', () => {
      expect(linkedList.removeFirstOccurrence("Alpha")).toBe(true);
      expect(linkedList.size()).toBe(1);
   });

   test('#removeLastOccurrence()', () => {
      expect(linkedList.removeLastOccurrence("Alpha")).toBe(true);
      expect(linkedList.size()).toBe(1);
   });

   test('#size()', () => {
      expect(linkedList.size()).toBe(2);
   });

   test('#toArray()', () => {
      let arr = linkedList.toArray();
      expect(arr.length).toBe(2);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
   });

   test('#toArrayReverse()', () => {
      let arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(2);
      expect(arr[0]).toBe("Beta");
      expect(arr[1]).toBe("Alpha");
   });

   test('#forEach()', () => {
      let val = "";
      linkedList.forEach((item) => {
         val += item;
      });
      expect(val).toBe("AlphaBeta");
   });

   test('#forEachReverse()', () => {
      let val = "";
      linkedList.forEachReverse((item) => {
         val += item;
      });
      expect(val).toBe("BetaAlpha");
   });

   test('#insertBefore()', () => {
      linkedList.insertBefore(1, "Charlie");
      expect(linkedList.size()).toBe(3);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Charlie");
      expect(linkedList.get(2)).toBe("Beta");

      // Test links from both ends.

      let arr = linkedList.toArray();
      expect(arr.length).toBe(3);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Charlie");
      expect(arr[2]).toBe("Beta");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(3);
      expect(arr[0]).toBe("Beta");
      expect(arr[1]).toBe("Charlie");
      expect(arr[2]).toBe("Alpha");
   });

   test('#insertAfter()', () => {
      linkedList.insertAfter(1, "Charlie");
      expect(linkedList.size()).toBe(3);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Beta");
      expect(linkedList.get(2)).toBe("Charlie");

      // Test links from both ends.

      let arr = linkedList.toArray();
      expect(arr.length).toBe(3);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Charlie");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(3);
      expect(arr[0]).toBe("Charlie");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Alpha");
   });
});

///////////////////////////
// Three Item List
//////////////////////////

describe('Three Item Linked List', () => {
   let linkedList = null;

   beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add("Alpha");
      linkedList.add("Beta");
      linkedList.add("Charlie");
   });

   test('#add()', () => {
      let val = linkedList.add("Delta");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Delta");
      expect(linkedList.size()).toBe(4);
      expect(val).toBe(true);

      // Check Links From Both Ends

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);      
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Charlie");
      expect(arr[3]).toBe("Delta");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Delta");
      expect(arr[1]).toBe("Charlie");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Alpha");      
   });

   test('#addFirst()', () => {
      let val = linkedList.addFirst("Delta");
      expect(linkedList.peekFirst()).toBe("Delta");
      expect(linkedList.peekLast()).toBe("Charlie");
      expect(linkedList.size()).toBe(4);
      expect(val).toBe(true);

      // Check Links From Both Ends

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Delta");
      expect(arr[1]).toBe("Alpha");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Charlie");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Charlie");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Alpha");
      expect(arr[3]).toBe("Delta");
   });

   test('#addLast()', () => {
      let val = linkedList.addLast("Delta");
      expect(linkedList.peekFirst()).toBe("Alpha");
      expect(linkedList.peekLast()).toBe("Delta");
      expect(linkedList.size()).toBe(4);
      expect(val).toBe(true);

      // Check Links From Both Ends

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);      
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Charlie");
      expect(arr[3]).toBe("Delta");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Delta");
      expect(arr[1]).toBe("Charlie");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Alpha");  
   });

   test('#addAll() array', () => {
      let val = linkedList.addAll(arrayValues);
      expect(linkedList.size()).toBe(9);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Beta");
      expect(linkedList.get(2)).toBe("Charlie");
      expect(linkedList.get(3)).toBe("x-ray");
      expect(linkedList.get(4)).toBe("yankee");
      expect(linkedList.get(5)).toBe("zulu");
      expect(linkedList.get(6)).toBe(1);
      expect(linkedList.get(7)).toBe(2);
      expect(linkedList.get(8)).toBe(3);
   });

   test('#addAll() list', () => {
      let val = linkedList.addAll(listValues);
      expect(linkedList.size()).toBe(9);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Beta");
      expect(linkedList.get(2)).toBe("Charlie");
      expect(linkedList.get(3)).toBe("x-ray");
      expect(linkedList.get(4)).toBe("yankee");
      expect(linkedList.get(5)).toBe("zulu");
      expect(linkedList.get(6)).toBe(1);
      expect(linkedList.get(7)).toBe(2);
      expect(linkedList.get(8)).toBe(3);
   });

   test('#addAllFirst() array', () => {
      let val = linkedList.addAllFirst(arrayValues);
      expect(linkedList.size()).toBe(9);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
      expect(linkedList.get(6)).toBe("Alpha");
      expect(linkedList.get(7)).toBe("Beta");
      expect(linkedList.get(8)).toBe("Charlie");
   });

   test('#addAllFirst() list', () => {
      let val = linkedList.addAllFirst(listValues);
      expect(linkedList.size()).toBe(9);
      expect(linkedList.get(0)).toBe("x-ray");
      expect(linkedList.get(1)).toBe("yankee");
      expect(linkedList.get(2)).toBe("zulu");
      expect(linkedList.get(3)).toBe(1);
      expect(linkedList.get(4)).toBe(2);
      expect(linkedList.get(5)).toBe(3);
      expect(linkedList.get(6)).toBe("Alpha");
      expect(linkedList.get(7)).toBe("Beta");
      expect(linkedList.get(8)).toBe("Charlie");
   });

   test('#clear()', () => {
      linkedList.clear();
      expect(linkedList.size()).toBe(0);
      expect(linkedList.peekFirst()).toBe(undefined);
      expect(linkedList.peekLast()).toBe(undefined);
   });

   test('#clone()', () => {
      let newList = linkedList.clone();
      expect(newList.size()).toBe(3);
      expect(newList.peekFirst()).toBe("Alpha");
      expect(newList.peekLast()).toBe("Charlie");
      expect(newList.get(1)).toBe("Beta");
   });

   test('#contains()', () => {
      expect(linkedList.contains("Alpha")).toBe(true);
      expect(linkedList.contains("Beta")).toBe(true);
      expect(linkedList.contains("Charlie")).toBe(true);
   });

   test('#get()', () => {
      expect(linkedList.get(2)).toBe("Charlie");
   });

   test('#getFirst()', () => {
      expect(linkedList.getFirst()).toBe("Alpha");
   });

   test('#getLast()', () => {
      expect(linkedList.getLast()).toBe("Charlie");
   });

   test('#indexOf()', () => {
      expect(linkedList.indexOf("Charlie")).toBe(2);
      expect(linkedList.indexOf("Beta")).toBe(1);
      expect(linkedList.indexOf("Alpha")).toBe(0);
   });

   test('#lastIndexOf()', () => {
      expect(linkedList.lastIndexOf("Alpha")).toBe(0);
   });

   test('#peek()', () => {
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#peekFirst()', () => {
      expect(linkedList.peekFirst()).toBe("Alpha");
   });

   test('#peekLast()', () => {
      expect(linkedList.peekLast()).toBe("Charlie");
   });

   test('#peekAt()', () => {
      expect(linkedList.peekAt(1)).toBe("Beta");
      expect(linkedList.peekAt(3)).toBe(undefined);
   });

   test('#poll()', () => {
      let item = linkedList.poll();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(2);
   });

   test('#pollFirst()', () => {
      let item = linkedList.pollFirst();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(2);
      expect(linkedList.peek()).toBe("Beta");
   });

   test('#pollLast()', () => {
      let item = linkedList.pollLast();
      expect(item).toBe("Charlie");
      expect(linkedList.size()).toBe(2);
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#pop()', () => {
      let item = linkedList.pop();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(2);
      expect(linkedList.peek()).toBe("Beta");
   });

   test('#push()', () => {
      linkedList.push("Delta");
      expect(linkedList.size()).toBe(4);
      expect(linkedList.get(0)).toBe("Delta");
      expect(linkedList.get(1)).toBe("Alpha");
   });

   test('#remove()', () => {
      let item = linkedList.remove();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(2);
      expect(linkedList.get(0)).toBe("Beta");
   });

   test('#removeAt()', () => {
      let item = linkedList.removeAt(1);
      expect(item).toBe("Beta");
      expect(linkedList.size()).toBe(2);
      expect(linkedList.peek()).toBe("Alpha");
   });

   test('#removeValue()', () => {
      expect(linkedList.removeValue("Beta")).toBe(true);
      expect(linkedList.size()).toBe(2);
   });

   test('#removeFirst()', () => {
      let item = linkedList.removeFirst();
      expect(item).toBe("Alpha");
      expect(linkedList.size()).toBe(2);;
   });

   test('#removeLast()', () => {
      let item = linkedList.removeLast();
      expect(item).toBe("Charlie");
      expect(linkedList.size()).toBe(2);
   });

   test('#removeFirstOccurrence()', () => {
      expect(linkedList.removeFirstOccurrence("Alpha")).toBe(true);
      expect(linkedList.size()).toBe(2);
   });

   test('#removeLastOccurrence()', () => {
      expect(linkedList.removeLastOccurrence("Beta")).toBe(true);
      expect(linkedList.size()).toBe(2);
   });

   test('#size()', () => {
      expect(linkedList.size()).toBe(3);
   });

   test('#toArray()', () => {
      let arr = linkedList.toArray();
      expect(arr.length).toBe(3);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Charlie");
   });

   test('#toArrayReverse()', () => {
      let arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(3);
      expect(arr[0]).toBe("Charlie");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Alpha");
   });

   test('#forEach()', () => {
      let val = "";
      linkedList.forEach((item) => {
         val += item;
      });
      expect(val).toBe("AlphaBetaCharlie");
   });

   test('#forEachReverse()', () => {
      let val = "";
      linkedList.forEachReverse((item) => {
         val += item;
      });
      expect(val).toBe("CharlieBetaAlpha");
   });

   test('#insertBefore()', () => {
      linkedList.insertBefore(1, "Delta");
      expect(linkedList.size()).toBe(4);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Delta");
      expect(linkedList.get(2)).toBe("Beta");
      expect(linkedList.get(3)).toBe("Charlie");

      // Test links from both ends.

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Delta");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Charlie");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Charlie");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Delta")
      expect(arr[3]).toBe("Alpha");
   });

   test('#insertAfter()', () => {
      linkedList.insertAfter(1, "Delta");
      expect(linkedList.size()).toBe(4);
      expect(linkedList.get(0)).toBe("Alpha");
      expect(linkedList.get(1)).toBe("Beta");
      expect(linkedList.get(2)).toBe("Delta");
      expect(linkedList.get(3)).toBe("Charlie");

      // Test links from both ends.

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Delta");
      expect(arr[3]).toBe("Charlie");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Charlie");
      expect(arr[1]).toBe("Delta");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Alpha");
   });
});

//////////////////////////
// Duplicate Value Tests
/////////////////////////
describe('Duplicate Value Tests', () => {
   let linkedList = null;

   beforeEach(() => {
      linkedList = new LinkedList();
      linkedList.add("Alpha");
      linkedList.add("Beta");
      linkedList.add("Alpha");
      linkedList.add("Beta");
      linkedList.add("Alpha");
   });

   test('#indexOf()', () => {
      expect(linkedList.indexOf("Alpha")).toBe(0);
      expect(linkedList.indexOf("Beta")).toBe(1);
   });

   test('#lastIndexOf()', () => {
      expect(linkedList.lastIndexOf("Alpha")).toBe(4);
      expect(linkedList.lastIndexOf("Beta")).toBe(3);
   });

   test('#removeValue()', () => {
      expect(linkedList.removeValue("Beta")).toBe(true);
      expect(linkedList.size()).toBe(4);

      // Test from Both Ends

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Alpha");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Alpha");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Alpha");
      expect(arr[3]).toBe("Alpha");
   });

   test('#removeFirstOccurrence() Alpha', () => {
      expect(linkedList.removeFirstOccurrence("Alpha")).toBe(true);
      expect(linkedList.size()).toBe(4);

      // Test from Both Ends

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Beta");
      expect(arr[1]).toBe("Alpha");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Alpha");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Alpha");
      expect(arr[3]).toBe("Beta");
   });

   test('#removeFirstOccurrence() Beta', () => {
      expect(linkedList.removeFirstOccurrence("Beta")).toBe(true);
      expect(linkedList.size()).toBe(4);

      // Test from Both Ends

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Alpha");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Alpha");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Alpha");
      expect(arr[3]).toBe("Alpha");
   });

   test('#removeLastOccurrence() Alpha', () => {
      expect(linkedList.removeLastOccurrence("Alpha")).toBe(true);
      expect(linkedList.size()).toBe(4);

      // Test from Both Ends

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Alpha");
      expect(arr[3]).toBe("Beta");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Beta");
      expect(arr[1]).toBe("Alpha");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Alpha");
   });

   test('#removeLastOccurrence() Beta', () => {
      expect(linkedList.removeLastOccurrence("Beta")).toBe(true);
      expect(linkedList.size()).toBe(4);

      // Test from Both Ends

      let arr = linkedList.toArray();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Beta");
      expect(arr[2]).toBe("Alpha");
      expect(arr[3]).toBe("Alpha");

      arr = linkedList.toArrayReverse();
      expect(arr.length).toBe(4);
      expect(arr[0]).toBe("Alpha");
      expect(arr[1]).toBe("Alpha");
      expect(arr[2]).toBe("Beta");
      expect(arr[3]).toBe("Alpha");
   });

   test('#size()', () => {
      expect(linkedList.size()).toBe(5);
   });
});

