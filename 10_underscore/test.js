const _ = require('./underscore');

a = [10,20,30,40,50,60]

dup = [10, 10, 20, 30, 300, 40, 60];
// console.log(_.identity(a));

// console.log(_.first(a,4));

// console.log(_.last(a,4));

// console.log(_.each(a, (item, index, array)=>{
// 	console.log(item+2, index, array);
// }));

// console.log(_.indexOf(a, 30));

// console.log(_.filter(a, (item)=>{
// 	return (item%20 === 0);
// }));

// console.log(_.reject(a, (item)=>{
// 	return (item%200 === 0);
// }));

// console.log(_.uniq(dup));

// console.log(_.map(a, (item)=>{
// 	return item*2;
// }))

// console.log(_.reduce(a, function(memo, num){ 
// 	return memo + num; 
// }));

// console.log(_.contains(a, 100));

// console.log(_.every(a, (item)=>{
// 	return (item%10 === 0);
// }));

// console.log(_.some(a, (item)=>{
// 	return (item%3 === 0);
// }));

// console.log(_.extend({a:10, rt:100}, {a:1, bb:2}, {ww:23, rt:56}));

// console.log(_.defaults({a:10, rt:100}, {a:1, bb:2}, {ww:23, rt:56}));

// const fn = (ar) => {
// 	return ar+10;
// }
// const once = _.once(fn);
// console.log(once(15));//25
// console.log(once(10));//25
// console.log(once(30));//25

// const memoizeFn = (a, b, c) => {
// 	console.log('memoize function executed');
// 	return a+b+c
// }
// const memo = _.memoize(memoizeFn);
// console.log(memo(1, 2, 3));//6 and the message should be console logged
// console.log(memo(1, 2, 3));//6 and no console.log
// console.log(memo(10, 30, 40));//80 and the message should be console logged


const delayFn = (a,b,c) => {
	console.log("delay function executed", a, b, c);
};
_.delay(delayFn, 1000, 10, 20, 30);//console logs after 3 sec
