/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

function bind(func, context){
	const args = Array.prototype.slice.call(arguments, 2);
	return(function(){
		const newArgs = Array.prototype.slice.call(arguments);
		const allArgs = args.concat(newArgs);
		return func.apply(context, allArgs);
		}); 
}


var alice = {
  name: 'alice',
  shout: function(){
    console.log(this.name);
  }
}
 
var boundShout = bind(alice.shout, alice);
boundShout(); // logs 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // logs 'bob'
 
var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
console.log(result);//foobar
console.log(result === 'foobar'); // true

//*************************************************************************

Function.prototype.bind = function( context ) {
	const args = Array.prototype.slice.call(arguments, 1);
	const func = this;
	return(function(){
		const newArgs = Array.prototype.slice.call(arguments);
		const allArgs = args.concat(newArgs);
		return func.apply(context, allArgs);
	});
};
var alice = {
    name: 'alice',
    shout: function(){
      console.log(this.name);
    }
  }
  var boundShout = alice.shout.bind(alice);
  boundShout(); // logs 'alice'
  boundShout = alice.shout.bind({name: 'bob'});
  boundShout(); // logs 'bob'
 
var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
console.log(result === 'foobar'); // true
