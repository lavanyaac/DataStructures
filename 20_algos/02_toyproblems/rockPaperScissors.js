/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

const rockPaperScissors = (rounds = 3) => {
	const plays = ['rock', 'paper', 'scissors'];
	const combos = [];
	combinations(rounds);
	return combos.length;

	function combinations(roundsToGo, combiArr=[]){
		if(roundsToGo === 0){
			combos.push(combiArr); 
			return;
		}

		for(const play of plays){
			const newArr = combiArr.slice();
			newArr.push(play);
			combinations(roundsToGo-1, newArr);
		}
	};
};

console.log(rockPaperScissors(3));//27;