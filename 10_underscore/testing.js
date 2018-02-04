const a = { 'q':2, 'f':3, 'c':{'d':3, 'h':9}}

const b= {};

const c = Object.assign({},a);
const d = Object.create(a);
a.q = 8;
a.c.d =7;
c.f = 6;
c.c.d =5;
// d.f= 10;
console.log(a);

console.log(c);

console.log(d);

console.log(d.f)