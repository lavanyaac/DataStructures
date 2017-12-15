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

console.log(_.every(a, (item)=>{
	return (item%10 === 0);
}));

console.log(_.some(a, (item)=>{
	return (item%3 === 0);
}));