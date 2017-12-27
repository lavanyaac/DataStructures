/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/
const insertionSort = function(array){
	for(let i = 0; i<array.length; i++){
		for(let j = i; j>0; j-- ){
			if(array[j].value < array[j-1].value){
				[array[j], array[j-1]] = [array[j-1], array[j]];
			}else{
				break;
			}
		}
	}
}

var testingTransform = function(array) {
  var transform = [];
  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }
  return transform;
};

a = [{ value: 10 }, { value: 5, order: 2 }, { value: 5, order: 1 }];
insertionSort(a);
console.log(a);//[ { value: 5, order: 2 }, { value: 5, order: 1 }, { value: 10 } ]

b = [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}];
insertionSort(b);
console.log(b);//[ { value: 5, order: 1 }, { value: 5, order: 2 }, { value: 10 } ]
