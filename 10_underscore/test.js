const _ = require('./underscore');

a = [10,20,30,40,50,60]

dup = [10, 10, 20, 30, 300, 40, 60];
//*************************************Identity********************************
// console.log(_.identity(a));
//*************************************First********************************
// console.log(_.first(a,4));
//*************************************Last********************************
// console.log(_.last(a,4));
//*************************************Last********************************
// console.log(_.each(a, (item, index, array)=>{
// 	console.log(item+2, index, array);
// }));
//*************************************IndexOf********************************
// console.log(_.indexOf(a, 30));
//*************************************Filter********************************
// console.log(_.filter(a, (item)=>{
// 	return (item%20 === 0);
// }));
//*************************************Reject********************************
// console.log(_.reject(a, (item)=>{
// 	return (item%200 === 0);
// }));
//*************************************Uniq********************************
// console.log(_.uniq(dup));
//*************************************Map********************************
// console.log(_.map(a, (item)=>{
// 	return item*2;
// }))
//*************************************Reduce********************************
// console.log(_.reduce(a, function(memo, num){ 
// 	return memo + num; 
// }));
//*************************************Contains********************************
// console.log(_.contains(a, 100));
//*************************************Every********************************
// console.log(_.every(a, (item)=>{
// 	return (item%10 === 0);
// }));
//*************************************Some********************************
// console.log(_.some(a, (item)=>{
// 	return (item%3 === 0);
// }));
//*************************************Extend********************************
// console.log(_.extend({a:10, rt:100}, {a:1, bb:2}, {ww:23, rt:56}));
//*************************************Default********************************
// console.log(_.defaults({a:10, rt:100}, {a:1, bb:2}, {ww:23, rt:56}));
//*************************************Once********************************
// const fn = (ar) => {
// 	return ar+10;
// }
// const once = _.once(fn);
// console.log(once(15));//25
// console.log(once(10));//25
// console.log(once(30));//25
//*************************************Memoize********************************
// const memoizeFn = (a, b, c) => {
// 	console.log('memoize function executed');
// 	return a+b+c
// }
// const memo = _.memoize(memoizeFn);
// console.log(memo(1, 2, 3));//6 and the message should be console logged
// console.log(memo(1, 2, 3));//6 and no console.log
// console.log(memo(10, 30, 40));//80 and the message should be console logged

//*************************************Delay********************************
// const delayFn = (a,b,c) => {
// 	console.log("delay function executed", a, b, c);
// };
// _.delay(delayFn, 1000, 10, 20, 30);//console logs after 3 sec
//*************************************Shuffle********************************
// console.log(a);
// console.log(_.shuffle(a));

//*************************************Invoke********************************
// const reverse = function(){
//   return this.split('').reverse().join('');
// };
// const reversedStrings = _.invoke(['dog', 'cat'], reverse);
// console.log(reversedStrings);//[ 'god', 'tac' ]

// const upperCasedStrings = _.invoke(['dog', 'cat'], 'toUpperCase');
// console.log(upperCasedStrings)//[ 'DOG', 'CAT' ]

// const sortedResult = _.invoke([[5, 1, 7], [3, 2, 1]], "sort");
// console.log(sortedResult);//[ [ 1, 5, 7 ], [ 1, 2, 3 ] ]

// const objSortedResult = _.invoke({a: [5, 1, 7], b: [3, 2, 66]}, "sort");
// console.log(objSortedResult);//[ [ 1, 5, 7 ], [ 2, 3, 66 ] ]

// const concatedresult = _.invoke(["lol"], "concat", "bbq");
// console.log(concatedresult);//[ 'lolbbq' ]

//*************************************SortBy********************************
let people = [{name : 'curly', age : 50}, {name : 'moe', age : 30}];
people = _.sortBy(people, function(person) {
  return person.age;
});
console.log(people);//[ { name: 'moe', age: 30 }, { name: 'curly', age: 50 } ]

const list = [undefined, 4, 1, undefined, 3, 2];
const result = _.sortBy(list, function(i) { return i; });
console.log(result);//[ 1, 2, 3, 4, undefined, undefined ]

const arr = ['one', 'two', 'three', 'four', 'five'];
const sorted = _.sortBy(arr, 'length');
console.log(sorted);//[ 'one', 'two', 'four', 'five', 'three' ]

//*************************************Invoke********************************
//*************************************Invoke********************************
//*************************************Invoke********************************
//*************************************Invoke********************************
//*************************************Invoke********************************

