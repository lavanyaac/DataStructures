/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

 /* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

 const isPrime = (num) => {
 	if(num === 0){
 		return false;
 	}
 	if(num === 1 || num === 2){
 		return true;
 	}
 	for(i = 2; i<=Math.ceil(Math.sqrt(num)); i++ ){
 		if(num%i === 0){
 			return false;
 		}
 	}
 	return true;
 }

 console.log(isPrime(7));

const primeSeive = (n) => {
 	const primes = generateRange(10);
 	primes[0] = primes[1] = null;
 	for(let i = 2; i<Math.ceil(Math.sqrt(n)); i++){
 		if(primes[i]){
 			for(j=i+i; j<primes.length; j += i){
 				primes[j] = null;
 			}
 		}
 	}
 	return primes;
}

 const generateRange = (n)=>{
 		return Array.from(Array(n+1).keys());
 }

console.log(primeSeive(10));